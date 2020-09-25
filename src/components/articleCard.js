import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import InfoLine from './infoLine';

const ArticleCard = ({ node, className }) => {
  const {
    fields: { author, date, language, keywords, slug, summery, title },
    bannerField: { banner },
  } = node;

  return (
    <Link
      to={slug}
      className={className}
      aria-label="לקריאת המאמר"
      css={css`
        display: flex;
        flex-direction: column;
        align-self: center;

        border-radius: 15px;
        background-color: var(--card-bg-color);
        color: var(--primary-color);
        text-decoration: none;

        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);

        width: 350px;
        max-width: 90vw;
        @media (min-width: 500px) {
          max-width: 500px;
          width: unset;
        }

        @media (min-width: 900px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: 330px;
          width: unset;
          max-width: unset;

          img {
            border-radius: 15px 0 0 15px;
          }

          .card__title {
            font-size: 2rem;
          }

          .card__summery {
            font-size: 1rem;
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
          fluid={banner.childImageSharp.fluid}
          css={css`
            border-radius: 10px 10px 0 0;
            width: 100%;
            height: 100%;
          `}
          alt={keywords.join(', ')}
        />
      </div>
      <div
        css={css`
          height: 100%;
          direction: ${language === 'he' ? 'rtl' : 'ltr'};
          padding: 1rem;
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          className="card__title"
          css={css`
            color: var(--title-color);
            font-size: 1.5rem;
            line-height: 1.1;
            margin-bottom: 1rem;
          `}
        >
          {title}
        </h1>
        <p
          className="card__summery"
          css={css`
            font-size: 0.875rem;
            line-height: 1.3;
            margin-bottom: 1rem;
            flex-grow: 1;
          `}
        >
          {summery}
        </p>
        <InfoLine className="card__info">
          <span>{author}</span>
          <span>{date}</span>
        </InfoLine>
      </div>
    </Link>
  );
};

export default ArticleCard;
