import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/premier-league.svg';
import userIcon from '../images/user.svg';
import Navbar, { MenuList } from './navbar';

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

  .left-menu {
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
      border: 0.1em solid var(--menu-text-color);
      border-radius: 0.3em;
      text-decoration: none;
      font-family: 'Rubik', Arial, Helvetica, sans-serif;
      text-align: center;
      transition: all 0.2s;
      color: #ffffff;

      &:hover,
      &:focus {
        color: var(--menu-text-color);
        background-color: transparent;
      }
    }
  }

  .logo-box {
    display: flex;
    align-items: center;
    color: var(--menu-text-color);
    text-decoration: none;
    font-size: 1.25rem;

    img {
      height: 40px;
      width: 40px;
      margin-left: 0.75rem;
    }
  }
`;

const Header = ({ maxWidth }) => {
  return (
    <Container maxWidth={maxWidth}>
      <div className="header-content">
        <MenuList className="left-menu" space="1rem">
          <li>
            <img src={userIcon} alt="" />
          </li>
          <li>
            <Link className="nav-item btn" to="/login">
              כניסה
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/register"
            >
              הרשמה
            </Link>
          </li>
        </MenuList>
        <Navbar className="middle" />
        <div className="right">
          <Link className="logo-box" to="/">
            פנטזי ליג
            <img src={logo} alt="לוגו" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
