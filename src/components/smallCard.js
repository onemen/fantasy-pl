import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import InfoLine from './infoLine';

const SmallCard = ({ data }) => {
  const {
    author,
    banner,
    date,
    language,
    keywords,
    slug,
    subtitle,
    title,
  } = data.fields;
  return (
    <Link
      to={slug}
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
