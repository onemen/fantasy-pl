import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li :not(:last-child) {
    ${prop =>
      prop.dir === 'rtl'
        ? `margin-left: ${prop.space || '6'}`
        : `margin-right: ${prop.space || '6'}`}rem;
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
    font-weight: bold;
  }
`;

const Navbar = ({ color, className, dir }) => {
  return (
    <nav className={className}>
      <MenuList color={color} dir={dir}>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/"
            aria-label="דף הבית"
          >
            דף הבית
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/about"
            aria-label="אודות"
          >
            אודות
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/contact"
            aria-label="כתבו לנו"
          >
            כתבו לנו
          </Link>
        </li>
      </MenuList>
    </nav>
  );
};

export default Navbar;
