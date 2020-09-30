import { css } from '@emotion/core';
import Layout from 'components/layout';
import SEO from 'components/seo';
import { Link } from 'gatsby';
import theme from 'styles/theme';

const NotFound = () => {
  return (
    <Layout
      css={{
        color: `${theme.colors.lightGreen}`,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        height: '300px',
        margin: '50px auto',
      }}
    >
      <SEO title="404: דף לא נמצא" />
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
    </Layout>
  );
};

export default NotFound;
