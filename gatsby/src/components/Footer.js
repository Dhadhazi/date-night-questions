import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  p{
    color: var(--black);
    opacity: 0.5;
    font-size: 12px;
  }
`

export default function Footer() {
  return (
    <FooterStyle>
      <p>Created by Daniel Hadhazi</p>
    </FooterStyle>
  );
}
