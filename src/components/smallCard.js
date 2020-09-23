import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import InfoLine from './infoLine';

const SmallCard = ({ data }) => {
  return (
    <Link
      to={data.slug}
      aria-label="לקריאת המאמר"
      css={css`
        border-radius: 10px;
        background-color: var(--card-bg-color);
        color: var(--primary-color);
        text-decoration: none;

        @media (min-width: 500px) {
          max-width: 350px;
        }
        justify-self: center;
      `}
    >
      <div
        css={css`
          height: 250px;
        `}
      >
        <Img
          fluid={data.fluid}
          css={css`
            border-radius: 10px 10px 0 0;
            height: 100%;
          `}
          alt={data.imageDescription ?? 'image'}
        />
      </div>

      <div
        css={css`
          direction: ${data.language === 'he' ? 'rtl' : 'ltr'};
          padding: 1rem;
        `}
      >
        <p
          css={css`
            color: var(--title-color);
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 1;
            margin-bottom: 0.5rem;
          `}
        >
          {data.title}
        </p>
        <p
          css={css`
            font-size: 0.875rem;
            line-height: 1.3;
            margin-bottom: 0.5rem;
            flex-grow: 1;
          `}
        >
          {data.subTitle}
        </p>
        <InfoLine>
          <span>{data.author}</span>
          <span>{data.publishedDate}</span>
        </InfoLine>
      </div>
    </Link>
  );
};

export default SmallCard;
