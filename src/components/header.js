import styled from '@emotion/styled';
import { Link } from 'gatsby';
import logo from 'images/premier-league.svg';
import theme from 'styles/theme';
import MobileNav from './mobile-nav';
import Navbar from './navbar';

const Container = styled.header`
  background-color: var(--dark-bg-color);

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
    min-height: 4rem;
  }

  .logo-box {
    display: flex;
    align-items: center;
    color: var(--title-color);
    text-decoration: none;
    font-size: 1.25rem;

    img {
      height: 40px;
      width: 40px;
      margin-bottom: 0;
      ${prop => (prop.dir === 'rtl' ? 'margin-left' : 'margin-right')}: 0.75rem;
    }
  }

  @media (max-width: ${({ maxWidth }) => (maxWidth || 0) + 20}px) {
    padding: 0 1rem;
  }

  @media (max-width: 769px) {
    .main-menu {
      display: none;
    }
  }

  .mobile-nav {
    display: none;
    visibility: hidden;
    @media (max-width: 769px) {
      display: block;
      visibility: visible;
    }
  }
`;

const Header = ({ maxWidth, dir }) => {
  return (
    <Container maxWidth={maxWidth} dir={dir}>
      <div className="header-content">
        <div className="start-menu-box">
          <Link className="logo-box" to="/">
            <img src={logo} alt="לוגו" />
            פנטזי מנג&#39;ר
          </Link>
        </div>
        <nav aria-label="תפריט עליון">
          <MobileNav color={theme.colors.lightGreen} />
          <Navbar className="main-menu" dir={dir} />
        </nav>
      </div>
    </Container>
  );
};

export default Header;
