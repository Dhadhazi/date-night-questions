import React from 'react';
import { graphql } from 'gatsby';

export default function Deck({ data }) {
  console.log(data)
  return (
    <>
      <div className="center">
        Deck Page
      </div>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    deck: sanityDeck(slug: { current: { eq: $slug } }) {
      name
      questions
    }
  }
`;