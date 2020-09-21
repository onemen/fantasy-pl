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
    direction: ${prop => (prop.language === 'he' ? 'rtl' : 'ltr')};

    margin: 0 auto;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
    min-height: 4rem;

    font-size: 0.9rem;
  }
`;

const Footer = ({ maxWidth, language }) => {
  return (
    <Container maxWidth={maxWidth} language={language}>
      <div className="footer-content">
        <Navbar color="text" />
        <div className="left">
          <span>פנטזי ליג @ 2020. כל הזכויות שמורות</span>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
