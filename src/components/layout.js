import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import '../styles/fonts.css';
import reset from '../styles/reset';
import theme from '../styles/theme';
import Footer from './footer';
import Header from './header';

export const globalStyles = css`
  :root {
    --primary-color: ${theme.colors.gray};
    --dark-bg-color: ${theme.colors.primaryDarker};
    --card-bg-color: ${theme.colors.darkGray};
    --title-color: ${theme.colors.lightGreen};
    --link_color: ${theme.colors.link_color};
    --link_color_hover: ${theme.colors.link_color_hover};
    --active_menu: ${theme.colors.link_color_active};
  }
  html,
  body {
    font-style: normal;
    font-size: 18px;
    line-height: 1.7;
    word-wrap: break-word;
  }
  body {
    color: ${theme.colors.gray};
    background-color: ${theme.colors.primaryDark};
  }
  button {
    cursor: pointer;
  }

  ${reset};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  line-height: 1.7;
  word-wrap: break-word;

  .content-wrapper {
    flex-grow: 1;
  }
`;

const Layout = ({
  children,
  className,
  frontmatter = { title: '' },
  maxWidth = 1170,
  language = 'he',
  dir = language === 'he' ? 'rtl' : 'ltr',
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `);
  const {
    site: {
      siteMetadata: {
        description: siteDescription,
        keywords: siteKeywords,
        title: siteTitle,
      },
    },
  } = data;

  const {
    keywords = siteKeywords,
    description = siteDescription,
    title,
  } = frontmatter;

  return (
    <Container maxWidth={maxWidth}>
      <Global styles={globalStyles} />
      <Helmet
        title={title ? `${title} | ${siteTitle}` : siteTitle}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords.join() },
        ]}
      >
        <html lang={language} />
        <noscript>This site runs best with JavaScript enabled.</noscript>
      </Helmet>
      <div className="content-wrapper">
        <Header maxWidth={maxWidth} dir={dir} />
        <main
          css={css`
            margin: 0 auto;
            max-width: ${maxWidth ? `${maxWidth}px` : 'none'};
          `}
          dir={dir}
          className={className}
        >
          {children}
        </main>
      </div>
      <Footer maxWidth={maxWidth} dir={dir} />
    </Container>
  );
};

export default Layout;
