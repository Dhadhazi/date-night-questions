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
  @keyframes moveLeft {
    0% {
      transform: translate(0px, 0);
    }
    20% {
      transform: scale(1);
    }
    50%{
      filter: blur(0px);
    }
    100% {
      transform: translate(-70%, 0) scale(0.5) rotate(90deg);
      filter: blur(4px);
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 3;
  .moveToTrash {
    position: fixed;
    z-index: 2;
    animation: moveLeft 1s forwards;
  }
  .mainQuestion{
    z-index: 2;
    animation: moveToCenter 1s forwards;
  }
  .hiddenQuestion{
    position: fixed;
    z-index: 1;
  }
  .originalTrash{
    position: fixed;
    z-index: 1;
    transform: translate(-70%, 0) scale(0.5) rotate(90deg);
    filter: blur(4px);
  }
`;

const QuestionBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(350px, 500px, 600px);
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
  background-image: ${(props) => props.bg};
  z-index: 2;
`;

export default function Deck({ data: { deck } }) {

  function nextQuestion(){

  }

  return (
    <>
      <QuestionsMainBoxStyle>
        <QuestionBoxStyle
          bg={deck.background.pattern}
          className="hiddenQuestion"
        >
          {deck.questions[1]}
        </QuestionBoxStyle>
        <QuestionBoxStyle
          bg={deck.background.pattern}
          className="mainQuestion"
        >
          {deck.questions[3]}
        </QuestionBoxStyle>
        <QuestionBoxStyle
          bg={deck.background.pattern}
          className="moveToTrash"
        >
          {deck.questions[2]}
        </QuestionBoxStyle>
        <QuestionBoxStyle
          bg={deck.background.pattern}
          className="originalTrash"
        >
          
        </QuestionBoxStyle>

      </QuestionsMainBoxStyle>
      <button type="button" onClick={()=>nextQuestion()}>Next Question</button>
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
