import React, {useState} from 'react'
import styled from 'styled-components'

const DeckSelectorStyle = styled.div`
  width: 100%;
`

const CategoryChoiceStyle = styled.div`
  display: flex;
  justify-content: center;
  button {
    border-radius: 0px;
    opacity: 0.85;
    filter: brightness(80%);
    :hover, :active, :focus {
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
`

export const DeckSelector = ({decks}) => {
  const [category, setCategory] = useState("all")

  console.log(decks)

  function selectCategory(buttonCategory) {
    document.getElementById(`${category}Button`).classList.remove("active-button")
    document.getElementById(`${buttonCategory}Button`).classList.add("active-button")
    setCategory(buttonCategory)
  }
  return (
    <DeckSelectorStyle>
      <CategoryChoiceStyle>
        {decks.map(deck => <button type="button" id={`${deck.category.name}Button`} onClick={()=> selectCategory(deck.category.name)} key={deck.category._id}>{deck.category.name}</button>)}
        <button type="button" className="active-button" id="allButton" onClick={()=> selectCategory("all")}>Show All</button>
       </CategoryChoiceStyle>
    </DeckSelectorStyle>
  )
}
