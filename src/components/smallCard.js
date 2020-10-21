import { css } from '@emotion/core';
import { rhythm, scale } from 'styles/typography';
import LinkCard from './linkCard';

const SmallCard = props => {
  return (
    <LinkCard
      {...props}
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
    />
  );
};

export default SmallCard;
