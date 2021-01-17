import React, { useState, useRef } from "react";
import { graphql } from "gatsby";
import { SEO } from "../components/SEO";
import {
  TitleStyle,
  QuestionsMainBoxStyle,
  QuestionBoxStyle,
  ButtonBox,
} from "../styles/DeckStyles";

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
        setAnimationRunning(true);
        nextAnimation();
        setTimeout(() => {
          switchQuestions();
          setAnimationRunning(false);
        }, 600);
      } else {
        gameOver();
      }
    }
  }

  return (
    <>
      <SEO title={deck.name} />
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
