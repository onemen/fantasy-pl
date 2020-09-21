import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li + li {
    margin-inline-start: ${prop => prop.space ?? '2.5rem'};
  }

  .nav-item {
    color: var(
      ${prop => (prop.color === 'text' ? '--primary-color' : '--title-color')}
    );
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
`;

const Navbar = ({ color }) => {
  return (
    <nav>
      <MenuList color={color}>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/blog"
          >
            תוכן
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
            to="/help"
          >
            הדרכה
          </Link>
        </li>
      </MenuList>
    </nav>
  );
};

export default Navbar;
