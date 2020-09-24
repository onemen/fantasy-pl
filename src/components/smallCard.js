import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import InfoLine from './infoLine';

const SmallCard = ({ node }) => {
  const {
    fields: { author, date, language, keywords, slug, subtitle, title },
    bannerField: { banner },
  } = node;

  return (
    <Link
      to={slug}
      aria-label="לקריאת המאמר"
      css={css`
        display: flex;
        flex-direction: column;

        border-radius: 10px;
        background-color: var(--card-bg-color);
        color: var(--primary-color);
        text-decoration: none;

        width: 350px;
        @media (min-width: 500px) {
          width: auto;
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

      <div
        css={css`
          direction: ${language === 'he' ? 'rtl' : 'ltr'};
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
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
          {title}
        </p>
        <p
          css={css`
            font-size: 0.875rem;
            line-height: 1.3;
            margin-bottom: 0.5rem;
            flex-grow: 1;
          `}
        >
          {subtitle}
        </p>
        <InfoLine>
          <span>{author}</span>
          <span>{date}</span>
        </InfoLine>
      </div>
    </Link>
  );
};

export default SmallCard;
