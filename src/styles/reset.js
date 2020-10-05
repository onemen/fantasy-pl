import { css } from '@emotion/core';
import theme from './theme';

const reset = css`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  html,
  body {
    font-style: normal;
    word-wrap: break-word;
  }
  html {
    overflow-x: hidden;
    overflow-y: auto !important;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    color: ${theme.colors.link_color};
  }

  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  input,
  button,
  select,
  textarea {
    line-height: inherit;
  }
  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }
  textarea {
    resize: vertical;
  }
  form {
    margin: 0;
  }
  input[type='search'] {
    appearance: none;
    font-family: inherit;
    font-size: inherit;
  }
`;

export default reset;
