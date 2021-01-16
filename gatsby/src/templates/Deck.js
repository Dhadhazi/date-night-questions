import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

const TitleStyle = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 2rem;
  color: var(--black);
  opacity: 0.5;
`;

const QuestionsMainBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ActualQuestionBoxStyle = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: clamp(200px, 350px, 450px);
  font-size: 4rem;
  text-align: center;
  margin: 15px;
  padding: 15px;
  color: var(--black);
  box-shadow: 5px 5px 9px 5px rgba(0, 0, 0, 0.76);
  text-shadow: 3px 3px 3px rgba(150, 150, 150, 0.45);
  border-radius: 20px;
  background-color: white;
  background-image: ${props => props.bg};
`;

export default function Deck({ data: { deck } }) {


  return (
    <>
      <QuestionsMainBoxStyle>
        <ActualQuestionBoxStyle bg={deck.background.pattern}>{deck.questions[1]}</ActualQuestionBoxStyle>
      </QuestionsMainBoxStyle>
      <TitleStyle>Topic: {deck.name}</TitleStyle>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    deck: sanityDeck(slug: { current: { eq: $slug } }) {
      name
      questions
      background {
        pattern
      }
    }
  }
`;
