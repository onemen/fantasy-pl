import styled from '@emotion/styled';
import Navbar from './navbar';

const Container = styled.footer`
  background-color: var(--dark-bg-color);
  min-height: 4rem;
  width: 100%;

  .footer-content {
    display: flex;
    flex-direction: column;
    direction: ${prop => (prop.language === 'he' ? 'rtl' : 'ltr')};

    margin: 0 auto;
    padding: 0 1rem;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
    min-height: 4rem;

    font-size: 0.9rem;

    & > * {
      margin: 0.5rem 0;
    }

    @media (min-width: ${prop => +prop.maxWidth + 10}px) {
      padding: 0;
    }

    @media (min-width: 769px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > * {
        margin: 0;
      }
    }
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
