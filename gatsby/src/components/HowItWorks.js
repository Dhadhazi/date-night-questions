import React from "react";
import styled from "styled-components";

const HowItWorksStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const TitleStyle = styled.h2`
  color: var(--red);
  font-size: 4rem;
`;

const ExplanerBoxStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--black);
  img {
    width: 40%;
  }
`;

export const HowItWorks = () => {
  return (
    <HowItWorksStyle>
      <TitleStyle>How it works</TitleStyle>
      <ExplanerBoxStyle>
        <img src="./select_who.svg" alt="" />
        <div>Select who you are playing with</div>
      </ExplanerBoxStyle>
      <ExplanerBoxStyle>
        <div>Choose a topic for the cards</div>
        <img src="./select_topic.svg" alt="" />
      </ExplanerBoxStyle>
      <ExplanerBoxStyle>
        <img src="./fun.svg" alt="" />
        <div>Answer the questions and have fun!</div>
      </ExplanerBoxStyle>
    </HowItWorksStyle>
  );
};
