import { css } from '@emotion/core';
import theme from './theme';

const reset = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: ${theme.colors.link_color};
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  } */
`;

export default reset;
