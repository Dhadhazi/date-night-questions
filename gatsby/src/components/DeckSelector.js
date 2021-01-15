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

export const DeckSelector = () => {
  const [category, setCategory] = useState("all")

  function selectCategory(buttonCategory) {
    document.getElementById(`${category}Button`).classList.remove("active-button")
    document.getElementById(`${buttonCategory}Button`).classList.add("active-button")
    setCategory(buttonCategory)
  }
  return (
    <DeckSelectorStyle>
      <CategoryChoiceStyle>
        <button type="button" id="friendButton" onClick={()=> selectCategory("friend")}>Friends</button>
        <button type="button" id="loverButton" onClick={()=> selectCategory("lover")}>Lover</button>
        <button type="button" className="active-button" id="allButton" onClick={()=> selectCategory("all")}>Show All</button>
       </CategoryChoiceStyle>
    </DeckSelectorStyle>
  )
}
