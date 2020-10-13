import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import theme from 'styles/theme';
import { rhythm, scale } from 'styles/typography';
import InfoLine from './infoLine';

const SmallCard = ({ node, noImage }) => {
  const {
    fields: { author, date, dateHe, language, keywords, slug, subtitle, title },
    bannerField: { banner },
  } = node;

  const dir = language === 'he' ? 'rtl' : 'ltr';

  return (
    <Link
      to={slug}
      aria-label="לקריאת המאמר"
      css={css`
        display: flex;
        flex-direction: column;

        border-radius: 10px;
        // opacity 0.7
        background-color: ${theme.colors.darkGray}b3;
        color: var(--primary-color);
        text-decoration: none;

        width: 350px;
        max-width: 90vw;
        @media (min-width: 500px) {
          width: 100%;
          max-width: 350px;
        }
        justify-self: center;

        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);

        transition: all 0.2s ease-in-out;
        :hover {
          transform: scale(1.02, 1.02);
          box-shadow: 0 22px 32px rgba(0, 0, 0, 0.22),
            0 14px 14px rgba(0, 0, 0, 0.2);
        }
      `}
    >
      {!noImage && (
        <div
          css={css`
            height: 200px;
          `}
        >
          <Img
            fluid={banner.childImageSharp.fluid}
            css={css`
              border-radius: 10px 10px 0 0;
              height: 100%;
            `}
            alt={keywords.join(', ')}
          />
        </div>
      )}

      <div
        css={css`
          direction: ${dir};
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        `}
      >
        <h2
          css={css`
            color: var(--title-color);
            ${scale(2 / 5)}
            margin: ${rhythm(1 / 2)} 0;
          `}
        >
          {title}
        </h2>
        <p
          css={css`
            ${scale(-1 / 5)}
            margin-bottom: ${rhythm(1 / 2)};
            flex-grow: 1;
          `}
        >
          {subtitle}
        </p>
        <InfoLine
          dir={dir}
          author={author}
          date={language === 'he' ? dateHe : date}
        />
      </div>
    </Link>
  );
};

export default SmallCard;
