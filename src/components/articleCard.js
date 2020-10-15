import { css } from '@emotion/core';
import Img from 'gatsby-image';
import { rhythm, scale } from 'styles/typography';
import InfoLine from './infoLine';
import LinkCard from './linkCard';
import ParagraphGroup from './paragraphs';

const ArticleCard = ({ node, noImage }) => {
  const {
    fields: { author, date, dateHe, language, keywords, slug, summery, title },
    bannerField: { banner },
  } = node;

  const dir = language === 'he' ? 'rtl' : 'ltr';

  return (
    <LinkCard
      to={slug}
      aria-label="לקריאת המאמר"
      direction={dir}
      maxwidth="500px"
      css={css`
        .card__image {
          border-radius: 10px 10px 0 0;
          width: 100%;
          height: 100%;
        }

        .card__title {
          color: var(--title-color);
          ${scale(3 / 5)}
          margin: ${rhythm(1 / 2)} 0;
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

          .card__image {
            border-radius: 10px 0 0 10px;
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
      {!noImage && banner && (
        <Img
          className="card__image"
          fluid={banner.childImageSharp.fluid}
          alt={keywords.join(', ')}
        />
      )}

      <div className="card__content">
        <h2 className="card__title">{title}</h2>
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
    </LinkCard>
  );
};

export default ArticleCard;
