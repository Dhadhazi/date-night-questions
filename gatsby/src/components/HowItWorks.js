import React from 'react'
import styled from 'styled-components'

const HowItWorksStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const TitleStyle = styled.h2`
  
`


export const HowItWorks = () => {
  return (
    <HowItWorksStyle>
      <TitleStyle>How it works</TitleStyle>
      <div>Choose a topic</div>
    </HowItWorksStyle>
  )
}
