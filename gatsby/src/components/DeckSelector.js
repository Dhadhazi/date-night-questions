import React, { useState } from "react";
import styled from "styled-components";
import { navigate } from 'gatsby';

const DeckSelectorStyle = styled.div`
  width: 100%;
`;

const CategoryChoiceStyle = styled.div`
  display: flex;
  justify-content: center;
  button {
    border-radius: 0px;
    opacity: 0.85;
    filter: brightness(80%);
    :hover,
    :active,
    :focus {
      opacity: 1;
      outline: none;
      border: none;
      filter: brightness(110%);
    }
  }
  .active-button {
    filter: brightness(110%);
    opacity: 1;
  }
`;

const ShowDeckBoxStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 15px;
  gap: 10px;
`;

const ShowDeckStyle = styled.button`
  width: clamp(20rem, 45%, 49%);
  height: clamp(10rem, 15vh, 20vh);
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const DeckSelector = ({ decks }) => {
  const [category, setCategory] = useState("all");

  console.log(decks);

  function goToDeckPage(slug) {
    navigate(`/${slug}`, {replace: true})
  }

  function selectCategory(buttonCategory) {
    document
      .getElementById(`${category}Button`)
      .classList.remove("active-button");
    document
      .getElementById(`${buttonCategory}Button`)
      .classList.add("active-button");
    setCategory(buttonCategory);
  }
  return (
    <DeckSelectorStyle>
      <CategoryChoiceStyle>
        {decks.map((deck) => (
          <button
            type="button"
            id={`${deck.category.name}Button`}
            onClick={() => selectCategory(deck.category.name)}
            key={deck.category._id}
          >
            {deck.category.name}
          </button>
        ))}
        <button
          type="button"
          className="active-button"
          id="allButton"
          onClick={() => selectCategory("all")}
        >
          Show All
        </button>
      </CategoryChoiceStyle>
      <ShowDeckBoxStyle>
        {decks
          .filter((deck) =>
            category !== "all" ? deck.category.name === category : true
          )
          .map((deck) => (
            <ShowDeckStyle key={deck._id} onClick={()=>goToDeckPage(deck.slug)}>{deck.name}</ShowDeckStyle>
          ))}
      </ShowDeckBoxStyle>
    </DeckSelectorStyle>
  );
};
