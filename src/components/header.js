import styled from '@emotion/styled';
import { Link } from 'gatsby';
import logo from '../images/premier-league.svg';
import userIcon from '../images/user.svg';
import theme from '../styles/theme';
import MobileNav from './mobile-nav';
import Navbar, { MenuList } from './navbar';

const Container = styled.header`
  background-color: var(--dark-bg-color);

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    direction: ${prop => (prop.language === 'he' ? 'rtl' : 'ltr')};

    margin: 0 auto;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
    min-height: 4rem;
  }

  .end-menu-box {
    img {
      display: inherit;
      width: 25px;
      height: 25px;
      margin: 0;
    }

    .btn {
      display: inline-block;
      padding: 0.3em 1.2em;
      background-color: var(--link_color);
      border: 0.1em solid var(--title-color);
      border-radius: 0.3em;
      text-decoration: none;
      font-family: 'Rubik', Arial, Helvetica, sans-serif;
      text-align: center;
      transition: all 0.2s;
      color: #ffffff;

      &:hover,
      &:focus {
        color: var(--title-color);
        background-color: transparent;
      }
    }
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
      margin-inline-end: 0.75rem;
    }
  }

  @media (max-width: 769px) {
    .navbar-box,
    .end-menu-box {
      display: none;
    }
    padding: 0 1rem;
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

const Header = ({ maxWidth, language }) => {
  return (
    <Container maxWidth={maxWidth} language={language}>
      <div className="header-content">
        <div className="start-menu-box">
          <Link className="logo-box" to="/">
            <img src={logo} alt="לוגו" />
            פנטזי ליג
          </Link>
        </div>
        <MobileNav color={theme.colors.lightGreen} />
        <Navbar className="navbar-box" />
        <MenuList className="end-menu-box" space="1rem">
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/register"
              aria-label="הרשמה"
            >
              הרשמה
            </Link>
          </li>
          <li>
            <Link className="nav-item btn" to="/login" aria-label="כניסה">
              כניסה
            </Link>
          </li>
          <li>
            <img src={userIcon} alt="" />
          </li>
        </MenuList>
      </div>
    </Container>
  );
};

export default Header;
