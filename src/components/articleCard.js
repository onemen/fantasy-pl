import { css } from '@emotion/core';
import { rhythm, scale } from 'styles/typography';
import LinkCard from './linkCard';

const ArticleCard = props => {
  return (
    <LinkCard
      {...props}
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
          ${props.noImage
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
    />
  );
};

export default ArticleCard;
