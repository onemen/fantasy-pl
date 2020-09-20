import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/premier-league.svg';
import userIcon from '../images/user.svg';

const Container = styled.header`
  background-color: var(--dark-bg-color);
  width: 100%;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'none')};
    min-height: 4rem;
  }

  .left-menu,
  .nav-list {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
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
      border: 0.1em solid var(--text-color);
      border-radius: 0.3em;
      text-decoration: none;
      font-family: 'Rubik', Arial, Helvetica, sans-serif;
      text-align: center;
      transition: all 0.2s;
      color: #ffffff;

      &:hover,
      &:focus {
        color: var(--text-color);
        background-color: transparent;
      }
    }

    li:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  .nav-list {
    li:not(:last-child) {
      margin-right: 2.5rem;
    }
  }

  .nav-item {
    color: var(--text-color);
    font-size: 0.9rem;
    text-decoration: none;

    &:hover,
    &:focus {
      color: var(--link_color_hover);
    }
  }

  .active-nav-item {
    color: var(--active_menu);
  }

  .logo-box {
    display: flex;
    align-items: center;
    color: var(--text-color);
    text-decoration: none;
    font-size: 1.25rem;

    img {
      height: 40px;
      width: 40px;
      margin-right: 0.75rem;
    }
  }
`;

const Header = ({ maxWidth }) => {
  return (
    <Container maxWidth={maxWidth}>
      <div className="header-content">
        <ul className="left-menu">
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
        </ul>
        <nav className="middle">
          <ul className="nav-list">
            <li>
              <Link
                className="nav-item"
                activeClassName="active-nav-item"
                to="/help"
              >
                הדרכה
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                activeClassName="active-nav-item"
                to="/news"
              >
                חדשות
              </Link>
            </li>
            <li>
              <Link
                className="nav-item"
                activeClassName="active-nav-item"
                to="/blog"
              >
                תוכן
              </Link>
            </li>
          </ul>
        </nav>
        <div className="right">
          <Link className="logo-box" to="/">
            <img src={logo} alt="לוגו" />
            פנטזי ליג
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
