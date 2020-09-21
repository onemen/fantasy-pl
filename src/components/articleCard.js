import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

const ArticleCard = ({ data }) => {
  return (
    <Link
      to={data.slug}
      css={css`
        height: 400px;
        display: flex;
        text-decoration: none;
      `}
    >
      <img
        css={css`
          border-radius: 15px 0 0 15px;
          width: 585px;
        `}
        src={data.image}
        alt="ילד עם כדור"
      />
      <div
        css={css`
          border-radius: 0 15px 15px 0;
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
            font-size: 2.25rem;
            line-height: 1;
            margin-bottom: 1rem;
          `}
        >
          {data.title}
        </h1>
        <p
          css={css`
            font-size: 1.4rem;
            line-height: 1.5;
            margin-bottom: 1rem;
            flex-grow: 1;
          `}
        >
          {data.summery}
        </p>
        <div
          css={css`
            * + * {
              margin-inline-start: 1rem;
            }
          `}
        >
          <span>{data.author}</span>
          <span>{data.publishedDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
