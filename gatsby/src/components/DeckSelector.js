import React, { useState, useEffect } from "react";
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
    filter: brightness(50%);
    color: var(--black);
    :hover,
    :active,
    :focus {
      color: white;
      opacity: 1;
      outline: none;
      border: none;
      filter: brightness(110%);
    }
  }
  .active-button {
    filter: brightness(110%);
    opacity: 1;
    color: white;
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
  color: var(--white);
  font-size: 2rem;
  background-color: var(--red);
  background-image: ${(props) => props.bg};
  border-radius: 15px;
  box-shadow: 6px 8px 3px -2px rgba(0,0,0,0.77);
  &:hover{
    transform: scale(1.05)
  }
`;

export const DeckSelector = ({ decks }) => {
  const [category, setCategory] = useState("all");

  let categoryList = [...new Set(decks.map(deck => deck.category.name))]
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
        {categoryList.map((category, index) => (
          <button
            type="button"
            id={`${category}Button`}
            onClick={() => selectCategory(category)}
            key={`category-${index}`}
          >
            {category}
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
            <ShowDeckStyle key={deck._id} bg={deck.background.pattern} onClick={()=>goToDeckPage(deck.slug.current)}>{deck.name}</ShowDeckStyle>
          ))}
      </ShowDeckBoxStyle>
    </DeckSelectorStyle>
  );
};
