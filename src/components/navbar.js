import styled from '@emotion/styled';
import { Link } from 'gatsby';

const menuItems = {
  '/': 'דף הבית',
  '/blog': 'ארכיון',
  '/basic': 'פנטזי למתחילים',
  '/about': 'אודות',
  '/contact': 'כתבו לנו',
};

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 0;

    :not(:last-child) {
      ${prop =>
        prop.dir === 'rtl'
          ? `margin-left: ${prop.space || '6'}`
          : `margin-right: ${prop.space || '6'}`}rem;
    }
  }

  .nav-item {
    color: var(
      ${prop => (prop.color === 'text' ? '--primary-color' : '--title-color')}
    );
    font-size: 0.9rem;
    text-decoration: none;
    padding: 5px 0;
    position: relative;

    :after {
      background: none;
      bottom: -2px;
      content: '';
      display: inline-block;
      height: 2px;
      left: 50%;
      position: absolute;
      transition: width 0.2s ease 0s, left 0.2s ease 0s;
      width: 0;
    }
    &:hover:after,
    &:focus:after {
      width: 100%;
      left: 0;
      background: ${prop =>
        prop.color === 'text' ? 'var(--primary-color)' : 'var(--title-color)'};
    }
  }

  .active-nav-item {
    color: var(--active_menu);
    font-weight: bold;
  }
`;

const Navbar = ({ color, className, dir }) => {
  return (
    <MenuList className={className} color={color} dir={dir}>
      {Object.entries(menuItems).map(([to, title], i) => (
        <li key={i}>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to={to}
            aria-label={title}
          >
            {title}
          </Link>
        </li>
      ))}
    </MenuList>
  );
};

export default Navbar;
