import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

const SmallCard = ({ data }) => {
  return (
    <Link
      to={data.slug}
      css={css`
        height: 180px;
        display: flex;
        text-decoration: none;
      `}
    >
      <img
        css={css`
          border-radius: 10px 0 0 10px;
          width: 165px;
        `}
        src={data.image}
        alt={data.imageDescription ?? 'image'}
      />
      <div
        css={css`
          border-radius: 0 10px 10px 0;
          display: flex;
          flex-direction: column;
          direction: ${data.language === 'he' ? 'rtl' : 'ltr'};
          padding: 1rem;

          background-color: var(--card-bg-color);
          color: var(--primary-color);
        `}
      >
        <h1
          css={css`
            color: var(--title-color);
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 1;
            margin-bottom: 1rem;
          `}
        >
          {data.title}
        </h1>
        <p
          css={css`
            font-size: 0.875rem;
            line-height: 1.3;
            margin-bottom: 1rem;
            flex-grow: 1;
          `}
        >
          {data.subTitle}
        </p>
        <div
          css={css`
            * + * {
              margin-inline-start: 1rem;
            }
            font-size: 0.665rem;
          `}
        >
          <span>{data.author}</span>
          <span>{data.publishedDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default SmallCard;
