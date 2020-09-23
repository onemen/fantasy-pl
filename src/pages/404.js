import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import theme from '../styles/theme';

const NotFound = () => {
  return (
    <Layout>
      <div
        css={{
          color: `${theme.colors.lightGreen}`,
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'space-evenly',
          height: '300px',
          margin: '40px',
        }}
      >
        <h1 dir="rtl">הדף אליו ביקשתם להגיע אינו קיים</h1>
        <h1>The requested page doesn't exist</h1>
        <h3>
          <Link
            css={css`
              color: ${theme.colors.lightGreen};
              &:hover,
              &:focus {
                color: ${theme.colors.link_color_hover};
              }
            `}
            to="/"
          >
            לדף הבית
          </Link>
        </h3>
      </div>
    </Layout>
  );
};

export default NotFound;
