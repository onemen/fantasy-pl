import { css } from '@emotion/core';

const InfoLine = ({
  children,
  className,
  size = '0.775rem',
  space = '1rem',
  weight = '100',
}) => {
  return (
    <div
      className={className}
      css={css`
        * + * {
          margin-inline-start: ${space};
        }
        font-size: ${size};
        font-weight: ${weight};
      `}
    >
      {children}
    </div>
  );
};

export default InfoLine;
