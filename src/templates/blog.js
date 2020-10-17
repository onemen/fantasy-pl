import { css } from '@emotion/core';
import InfoLine from 'components/infoLine';
import Layout from 'components/layout';
import SEO from 'components/seo';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { cleanHtml } from 'lib/cleanHtml';
import { lighten } from 'polished';
import Markdown from 'react-markdown';
import ReactMarkdown from 'react-markdown/with-html';
import theme from 'styles/theme';
import { rhythm, scale } from 'styles/typography';

const blogStyle = css`
  width: 100%;
  margin: 0px auto;
  max-width: 800px;
  padding: 20px 40px 40px;
  background-color: ${theme.colors.primaryDark};

  .link,
  a {
    color: ${lighten(0.2, theme.colors.green)};
    text-decoration: none;
  }

  .blog-header {
    text-align: center;

    h1 {
      ${scale(1.2)}
      margin-top: ${rhythm(3 / 2)};
      margin-bottom: ${rhythm(2 / 3)};
    }

    h2 {
      margin-top: ${rhythm(2 / 3)};
      margin-bottom: ${rhythm(2 / 3)};
    }
  }

  @media (max-width: 767px) {
    h1 {
      ${scale(3 / 5)}
    }
    h2 {
      ${scale(2 / 5)}
    }
    h3 {
      ${scale(1 / 5)}
    }
  }

  .banner {
    text-align: center;
    margin: 1rem auto;
    p {
      margin-bottom: 0;
    }
    @media (max-width: 767px) {
      padding: 0;
    }

    &__img {
      max-height: 400px;
    }
  }

  .blog {
    h3 {
      margin-bottom: ${rhythm(1 / 3)};
    }

    p > strong {
      font-weight: 500;
    }

    p + ul {
      margin-top: calc(-1.55rem / 1.5);
    }

    ul {
      margin-block-start: 1em;
      margin-block-end: 1em;
      padding-inline-start: 40px;
    }

    table {
      font-size: 0.875rem;
      border-collapse: collapse;
      border-spacing: 0;
      direction: rtl;
      margin: 0 auto 1.55rem;
    }
    tbody {
      display: table-row-group;
      vertical-align: middle;
    }
    tr {
      display: table-row;
      vertical-align: inherit;
    }
    th {
      padding-top: 11px;
      padding-bottom: 11px;
      background-color: ${theme.brand.primary};
      color: ${theme.colors.primaryDarker};
    }
    td,
    th {
      border: 1px solid #ddd;
      text-align: left;
      padding: 8px;
    }
    tr:nth-of-type(2n) {
      background-color: ${theme.colors.primaryDark};
    }
    table p {
      margin: 0 0.75rem;
      text-align: right;
    }

    .comment-link {
      background-color: ${theme.colors.darkGray};
      border-inline-start: 5px solid ${theme.brand.primary};
      color: ${theme.colors.gray};
      margin-left: 2rem;
      margin-right: 2rem;
      padding: 1rem;
    }

    .credit {
      display: block;
      text-align: center;
      ${scale(-1 / 5)}
    }
  }
`;

const blog = ({ data: { markdown } }) => {
  const {
    author,
    banner,
    bannerCredit,
    date,
    dateHe,
    language,
    title,
    subtitle,
  } = markdown.fields;

  const dir = language === 'he' ? 'rtl' : 'ltr';

  return (
    <Layout dir={dir}>
      <SEO
        frontmatter={markdown.fields}
        metaImage={banner?.childImageSharp?.fluid?.src}
        isBlogPost
      />
      <article css={blogStyle}>
        <div className="blog-header">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>

        <InfoLine
          dir={dir}
          author={author}
          date={language === 'he' ? dateHe : date}
        />

        {banner && (
          <div className="banner">
            <Img className="banner__img" fluid={banner.childImageSharp.fluid} />
            {bannerCredit ? <Markdown>{bannerCredit}</Markdown> : null}
          </div>
        )}

        <ReactMarkdown
          className="blog"
          source={cleanHtml(markdown.html)}
          escapeHtml={false}
        />
      </article>
    </Layout>
  );
};

export default blog;

export const pageQuery = graphql`
  query getMarkdownFile($slug: String!) {
    markdown: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        title
        subtitle
        author
        date(formatString: "MMMM Do, YYYY")
        dateHe: date(formatString: "MMMM Do, YYYY", locale: "he-IL")
        language
        banner {
          ...bannerImage720
        }
        bannerCredit
      }
      html
    }
  }
`;
