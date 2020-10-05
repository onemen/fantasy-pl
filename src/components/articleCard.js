import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { rhythm, scale } from 'styles/typography';
import InfoLine from './infoLine';
import ParagraphGroup from './paragraphs';

const ArticleCard = ({ node, noImage, ...props }) => {
  const {
    fields: { author, date, dateHe, language, keywords, slug, summery, title },
    bannerField: { banner },
  } = node;

  const dir = language === 'he' ? 'rtl' : 'ltr';

  return (
    <Link
      {...props}
      to={slug}
      aria-label="לקריאת המאמר"
      css={css`
        display: flex;
        flex-direction: column-reverse;
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
          width: 100%;
        }

        .card__summery {
          ${scale(-1 / 5)}
          flex-grow: 1;
        }

        @media (min-width: 900px) {
          ${noImage
            ? ``
            : `display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: minmax(330px, auto);`}
          width: 100%;
          max-width: unset;

          img {
            border-radius: 15px 0 0 15px;
          }

          .card__title {
            ${scale(1)}
            margin-top: ${rhythm(1 / 2)};
          }

          .card__summery {
            ${scale(0)}
          }

          .card__info {
            ${scale(-1 / 5)}
          }
        }
      `}
    >
      <div
        css={css`
          height: 100%;
          direction: ${dir};
          padding: 1rem;
          display: flex;
          flex-direction: column;
        `}
      >
        <h3
          className="card__title"
          css={css`
            color: var(--title-color);
            ${scale(3 / 5)}
            margin: ${rhythm(1 / 2)} 0;
          `}
        >
          {title}
        </h3>
        <div className="card__summery">
          <ParagraphGroup
            summery={summery}
            margin={{ top: 0, bottom: rhythm(1 / 2) }}
          />
        </div>
        <InfoLine
          className="card__info"
          dir={dir}
          author={author}
          date={language === 'he' ? dateHe : date}
        />
      </div>

      {!noImage && banner && (
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
      )}
    </Link>
  );
};

export default ArticleCard;
