import styled from '@emotion/styled';
import { Link } from 'gatsby';
import theme from 'styles/theme';

const LinkCard = styled(Link)`
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

export default LinkCard;
