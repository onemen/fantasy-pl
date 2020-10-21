import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import theme from 'styles/theme';
import { rhythm } from 'styles/typography';
import InfoLine from './infoLine';
import ParagraphGroup from './paragraphs';

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  direction: ltr;

  border-radius: 10px;
  // opacity 0.7
  background-color: ${theme.colors.darkGray}b3;
  color: var(--primary-color);
  text-decoration: none;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.02, 1.02);
    box-shadow: 0 22px 32px rgba(0, 0, 0, 0.22), 0 14px 14px rgba(0, 0, 0, 0.2);
  }

  width: 350px;
  max-width: 90vw;
  @media (min-width: 500px) {
    max-width: ${prop => prop.maxwidth || '350px'};
    width: 100%;
  }

  @media (min-width: 900px) {
    width: 100%;
    max-width: unset;
  }

  .card__content {
    direction: ${prop => prop.direction || 'rtl'};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const LinkCard = ({ node, noImage, ...props }) => {
  const {
    fields: { author, date, dateHe, language, keywords, slug, summery, title },
    bannerField: { banner },
  } = node;

  const dir = language === 'he' ? 'rtl' : 'ltr';

  return (
    <Card {...props} to={slug} aria-label="לקריאת המאמר" direction={dir}>
      {!noImage && banner && (
        <Img
          className="card__image"
          fluid={banner.childImageSharp.fluid}
          alt={keywords.join(', ')}
        />
      )}

      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <ParagraphGroup
          className="card__summery"
          summery={summery}
          margin={{ top: 0, bottom: rhythm(1 / 2) }}
        />
        <InfoLine
          dir={dir}
          author={author}
          date={language === 'he' ? dateHe : date}
        />
      </div>
    </Card>
  );
};

export default LinkCard;
