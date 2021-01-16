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
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23fe9000' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export default function Deck({ data: { deck } }) {
  console.log(deck);

  return (
    <>
      <QuestionsMainBoxStyle>
        <ActualQuestionBoxStyle>{deck.questions[1]}</ActualQuestionBoxStyle>
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
    }
  }
`;
