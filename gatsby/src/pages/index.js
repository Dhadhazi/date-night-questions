import { graphql } from 'gatsby';
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

const IndexPage = ({ data }) => {
  return (
    <IndexPageStyle>
      <HowItWorks />
      <DeckSelector decks={data.decks.nodes} />
    </IndexPageStyle>
  )
}

export default IndexPage

export const query = graphql`
query DecksQuery {
  decks: allSanityDeck {
    nodes {
      name
      description
      slug {
        current
      }
      category {
        _id
        name
      }
    }
  }
}

`;
