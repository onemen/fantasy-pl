import styled from '@emotion/styled';
import React from 'react';

const Container = styled.footer`
  background-color: var(--dark-bg-color);
  min-height: 4rem;
  width: 100%;

  .footer-content {
    margin: 0 auto;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
  }
`;

const Footer = ({ maxWidth }) => {
  return (
    <Container maxWidth={maxWidth}>
      <div className="footer-content">footer</div>
    </Container>
  );
};

export default Footer;
