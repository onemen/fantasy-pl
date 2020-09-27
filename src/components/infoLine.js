import { css } from '@emotion/core';

const InfoLine = ({
  author,
  date,
  size = '0.775rem',
  space = '1rem',
  weight = '100',
  dir,
  ...props
}) => {
  return (
    <div
      {...props}
      css={css`
        * {
          display: inline;
        }
        * :not(:last-child) {
          ${dir === 'rtl' ? 'margin-left' : 'margin-right'}: 0.75rem;
        }
        font-size: ${size};
        font-weight: ${weight};
      `}
    >
      <div>{author}</div>
      <div>{date}</div>
    </div>
  );
};

export default InfoLine;
