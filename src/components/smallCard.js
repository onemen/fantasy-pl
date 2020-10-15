import { css } from '@emotion/core';
import Img from 'gatsby-image';
import { rhythm, scale } from 'styles/typography';
import InfoLine from './infoLine';
import LinkCard from './linkCard';

const SmallCard = ({ node, noImage }) => {
  const {
    fields: { author, date, dateHe, language, keywords, slug, subtitle, title },
    bannerField: { banner },
  } = node;

  const dir = language === 'he' ? 'rtl' : 'ltr';

  return (
    <LinkCard
      to={slug}
      aria-label="לקריאת המאמר"
      direction={dir}
      css={css`
        .card__image {
          border-radius: 10px 10px 0 0;
          height: 200px;
        }

        .card__title {
          color: var(--title-color);
          ${scale(2 / 5)}
          margin: ${rhythm(1 / 2)} 0;
        }

        .card__summery {
          ${scale(-1 / 5)}
          margin-bottom: ${rhythm(1 / 2)};
          flex-grow: 1;
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
        <p className="card__summery">{subtitle}</p>
        <InfoLine
          dir={dir}
          author={author}
          date={language === 'he' ? dateHe : date}
        />
      </div>
    </LinkCard>
  );
};

export default SmallCard;
