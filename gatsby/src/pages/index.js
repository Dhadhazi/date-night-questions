import * as React from "react"
import styled from "styled-components"
import { DeckSelector } from "../components/DeckSelector"
import { HowItWorks } from "../components/HowItWorks"

const IndexPageStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`

const IndexPage = () => {
  return (
    <IndexPageStyle>
      <HowItWorks />
      <DeckSelector />
    </IndexPageStyle>
  )
}

export default IndexPage
