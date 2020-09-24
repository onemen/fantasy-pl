import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { useState } from 'react';
import theme from '../styles/theme';

const Container = props => {
  const {
    maxWidth = 720,
    noHorizontalPadding = false,
    noVerticalPadding = false,
    ...restProps
  } = props;
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${maxWidth + (noHorizontalPadding ? 0 : 80)}px;
        padding: ${noVerticalPadding ? 0 : '40'}px
          ${noHorizontalPadding ? 0 : '40'}px;
        @media (max-width: 767px) {
          padding: ${noVerticalPadding ? 0 : '20'}px
            ${noHorizontalPadding ? 0 : '20'}px;
        }
      `}
      {...restProps}
    >
      {props.children}
    </div>
  );
};

const Toggle = ({ color = 'white' }) => {
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);

  const onOpenTextColor = theme.colors.lightGreen;
  return (
    <div className="mobile-nav">
      <button
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
        css={css`
          z-index: 30;
          top: -5px;
          position: relative;
          background: transparent;
          border: none;
          :hover:not(.touch),
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={css`
            width: 24px;
            height: 2px;
            background: ${color};
            position: absolute;
            left: 0;
            ${isToggledOn ? 'background: transparent' : `background: ${color}`};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            ::before {
              content: '';
              top: -8px;
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? `${onOpenTextColor}` : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(45deg); top: 0; '
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
            ::after {
              top: 8px;
              content: '';
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? `${onOpenTextColor}` : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(-45deg); top: 0;'
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
          `}
        />
      </button>
      {isToggledOn && (
        <div
          css={css`
            position: absolute;
            z-index: 20;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            background: ${theme.colors.primaryDarker};
          `}
        >
          <Container
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
              a {
                color: ${onOpenTextColor};
                font-size: 22px;
                margin: 10px 0;
                padding: 10px;
                border-radius: 5px;
                :hover {
                  background: rgba(0, 0, 0, 0.2);
                }
              }
              .active {
                background: rgba(0, 0, 0, 0.2);
              }
            `}
          >
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/"
              aria-label="דף הבית"
            >
              דף הבית
            </Link>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/about"
              aria-label="אודות"
            >
              אודות
            </Link>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/contact"
              aria-label="כתבו לנו"
            >
              כתבו לנו
            </Link>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Toggle;
