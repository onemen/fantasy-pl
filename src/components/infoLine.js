import { css } from '@emotion/core';
import React from 'react';

const InfoLine = ({
  children,
  className,
  size = '0.875rem',
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
