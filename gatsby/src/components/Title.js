import React from 'react'
import styled from 'styled-components'

const TitleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1, h3 {
    margin: 0;
    padding: 0;
  }
  h1 {
    color: var(--red);
    font-size: 6rem;
  }
  h3 {
    color: var(--white);
    background-color: var(--red);
    padding: 2px;
    transform: rotate(-3deg)
  }

  @media (max-width: 830px){
    h1{
      font-size: 4rem;
    }
    h3{
      font-size: 2rem;
    }
  }
`

export const Title = () => {
  return (
    <TitleStyle>
      <h1>Date Night Questions</h1>
      <h3>Flip cards and take turns answering questions</h3>
    </TitleStyle>
  )
}
