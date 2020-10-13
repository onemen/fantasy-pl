import styled from '@emotion/styled';
import Navbar from './navbar';

const Container = styled.footer`
  background-color: var(--dark-bg-color);
  min-height: 4rem;
  width: 100%;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem auto;

    padding: 0 1rem;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
    min-height: 4rem;
    font-size: 0.9rem;

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 4rem;
    }

    & > * {
      margin: 0.5rem 0;
    }

    @media (min-width: ${prop => +prop.maxWidth + 10}px) {
      padding: 0;
    }

    @media (min-width: 769px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      & > * {
        margin: 0;
      }
    }

    @media (max-width: 600px) {
      padding: 1rem;
      .navbar {
        li :not(:last-child) {
          margin-inline-end: 0;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;

const Footer = ({ maxWidth, dir }) => {
  return (
    <Container maxWidth={maxWidth} dir={dir}>
      <div className="footer-content">
        <div role="navigation" aria-label="תפריט תחתון">
          <Navbar className="navbar" color="text" dir={dir} />
        </div>
        <div className="left">
          <span>פנטזי מנג&#39;ר @ 2020. כל הזכויות שמורות</span>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
