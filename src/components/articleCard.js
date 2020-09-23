import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import InfoLine from './infoLine';

const ArticleCard = ({ data }) => {
  return (
    <Link
      to={data.slug}
      aria-label="למאמר השלם"
      css={css`
        display: flex;
        flex-direction: column;

        border-radius: 15px;
        background-color: var(--card-bg-color);
        color: var(--primary-color);
        text-decoration: none;

        @media (min-width: 900px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          img {
            border-radius: 15px 0 0 15px;
          }

          .card__title {
            font-size: 2.25rem;
          }

          .card__summery {
            font-size: 1.4rem;
            line-height: 1.5;
          }

          .card__info {
            font-size: 1rem;
          }
        }
      `}
    >
      <div>
        <Img
          fluid={data.fluid}
          css={css`
            border-radius: 10px 10px 0 0;
            width: 100%;
            height: 100%;
          `}
          alt={data.imageDescription ?? 'image'}
        />
      </div>
      <div
        css={css`
          height: 100%;
          direction: ${data.language === 'he' ? 'rtl' : 'ltr'};
          padding: 1rem;
        `}
      >
        <h1
          className="card__title"
          css={css`
            color: var(--title-color);
            font-size: 1.75rem;
            line-height: 1.1;
            margin-bottom: 1rem;
          `}
        >
          {data.title}
        </h1>
        <p
          className="card__summery"
          css={css`
            font-size: 1rem;
            line-height: 1.3;
            margin-bottom: 1rem;
            flex-grow: 1;
          `}
        >
          {data.summery}
        </p>
        <InfoLine className="card__info">
          <span>{data.author}</span>
          <span>{data.publishedDate}</span>
        </InfoLine>
      </div>
    </Link>
  );
};

export default ArticleCard;
