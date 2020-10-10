import { css } from '@emotion/core';
import SEO from 'components/seo';
import { Link } from 'gatsby';
import theme from 'styles/theme';
import Layout from './layout';

const WorkInProgress = ({ title }) => {
  return (
    <Layout
      css={{
        color: `${theme.colors.lightGreen}`,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        height: '450px',
        margin: '50px auto',
      }}
    >
      <SEO title={title} />
      <img src="work_in_progress.svg" alt="" />
      <h1 dir="rtl" tabIndex="-1">
        הדף עדין אינו מוכן
      </h1>
      <h1>The requested page doesn&#39;t exist yet</h1>
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

export default WorkInProgress;
