import styled from '@emotion/styled';
import React from 'react';
import Navbar from './navbar';

const Container = styled.footer`
  background-color: var(--dark-bg-color);
  min-height: 4rem;
  width: 100%;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
    min-height: 4rem;

    font-size: 0.9rem;
  }
`;

const Footer = ({ maxWidth }) => {
  return (
    <Container maxWidth={maxWidth}>
      <div className="footer-content">
        <div className="left">
          <span>פנטזי ליג @ 2020. כל הזכויות שמורות</span>
        </div>
        <Navbar color="text" />
      </div>
    </Container>
  );
};

export default Footer;
