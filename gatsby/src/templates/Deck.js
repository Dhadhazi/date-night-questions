import React, { useState, useRef } from "react";
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
  @keyframes moveToTrash {
    0% {
      transform: translate(0px, 0);
    }
    20% {
      transform: scale(1);
    }
    50% {
      filter: blur(0px);
    }
    100% {
      transform: translate(-70%, 0) scale(0.5) rotate(90deg);
      filter: blur(4px);
    }
  }

    @keyframes moveToTrashMobile {
    0% {
      transform: translate(0px, 0);
    }
    20% {
      transform: scale(1);
    }
    50% {
      filter: blur(0px);
    }
    100% {
      transform: translate(-1500px, 0) scale(0.5) rotate(90deg);
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
    animation: moveToTrash 0.5s forwards;
    @media (max-width: 1000px) {
      animation: moveToTrashMobile 1s forwards;
    }
  }
  .mainQuestion {
    position: absolute;
    z-index: 2;
    box-shadow: none;
    cursor: pointer;
  }
  .trashQuestion {
    position: fixed;
    z-index: 1;
    transform: translate(-70%, 0) scale(0.5) rotate(90deg);
    filter: blur(4px);
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const QuestionBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(350px, 450px, 600px);
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
  @media (max-width: 1000px) {
    width: clamp(250px,350px,450px);
  }
  @media (max-width: 500px) {
    width: 60vw;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Deck({ data: { deck } }) {
  const [hiddenQuestion, setHiddenQuestion] = useState(1);
  const [mainQuestion, setMainQuestion] = useState(0);
  const [trashQuestion, setTrashQuestion] = useState(-1);
  const [animationRunning, setAnimationRunning] = useState(false);
  const mainQuestionElement = useRef();

  function nextAnimation() {
    mainQuestionElement.current.classList.add("moveToTrash");
    setTimeout(
      () => mainQuestionElement.current.classList.remove("moveToTrash"),
      600
    );
  }

  function switchQuestions() {
    setHiddenQuestion((prevState) => prevState + 1);
    setMainQuestion((prevState) => prevState + 1);
    setTrashQuestion((prevState) => prevState + 1);
  }

  function gameOver() {
    mainQuestionElement.current.classList.add("moveToTrash");
    document.getElementById("hiddenQuestion").innerText =
      "There are no more questions in this deck";
  }

  function nextQuestion() {
    if (!animationRunning) {
      if (mainQuestion < deck.questions.length - 1) {
        setAnimationRunning(true)
        nextAnimation();
        setTimeout(() => switchQuestions(), 600);
        setTimeout(()=> setAnimationRunning(false), 600);
      } else {
        gameOver();
      }
    }
  }

  return (
    <>
      <QuestionsMainBoxStyle>
        <QuestionBoxStyle bg={deck.background.pattern} id="hiddenQuestion">
          {deck.questions[hiddenQuestion]}
        </QuestionBoxStyle>
        <QuestionBoxStyle
          bg={deck.background.pattern}
          className="mainQuestion"
          id="mainQuestion"
          ref={mainQuestionElement}
          onClick={() => nextQuestion()}
        >
          {deck.questions[mainQuestion]}
        </QuestionBoxStyle>
        <QuestionBoxStyle
          bg={deck.background.pattern}
          className="trashQuestion"
          id="trashQuestion"
        >
          {trashQuestion === -1 ? "" : deck.questions[trashQuestion]}
        </QuestionBoxStyle>
      </QuestionsMainBoxStyle>
      <ButtonBox>
        <button
          type="button"
          onClick={() => nextQuestion()}
          disabled={animationRunning}
        >
          Next Question
        </button>
      </ButtonBox>
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
