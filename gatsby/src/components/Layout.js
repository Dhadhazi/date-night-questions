import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import { Title } from './Title';
import Footer from './Footer';

const SiteBorderStyles = styled.div`
  max-width: 1200px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 8vw, 10rem);
  background: white;
  background-size: 1500px;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
  margin-top: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <SiteBorderStyles>
        <Title />
        <ContentStyles>
          {children}
        </ContentStyles>
        <Footer />
      </SiteBorderStyles>
    </>
  );
}
