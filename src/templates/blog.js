import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Markdown from 'react-markdown';
import ReactMarkdown from 'react-markdown/with-html';
import InfoLine from '../components/infoLine';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { cleanHtml } from '../lib/cleanHtml';
import theme from '../styles/theme';

const blogStyle = css`
  width: 100%;
  margin: 0px auto;
  max-width: 800px;
  padding: 20px 40px 40px;
  background-color: ${theme.colors.darkGray};

  h1 {
    font-size: 2.25rem;
    line-height: 1.1;
    margin-bottom: 1rem;
    text-align: center;
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.2rem;
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
    h2 {
      margin-top: 2.55rem;
      margin-bottom: 1.55rem;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 0;
    }

    p {
      margin: 0 0 1.55rem 0;
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
      color: white;
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
      margin: 0;
      text-align: right;
      margin-inline-start: 0.75rem;
      margin-inline-end: 0.75rem;
    }

    .comment-link {
      background-color: #fff3d4;
      border-inline-start: 5px solid ${theme.brand.primary};
      color: ${theme.colors.primaryDark};
      font-size: 1.1rem;
      padding: 1rem;

      .link {
        color: ${theme.colors.link_color};
      }
    }
  }
`;

const blog = ({ data: { markdown } }) => {
  const { author, banner, bannerCredit, date, title } = markdown.fields;

  return (
    <Layout dir="rtl" css={blogStyle} frontmatter={markdown.fields}>
      <SEO
        frontmatter={markdown.fields}
        metaImage={banner?.childImageSharp?.fluid?.src}
        isBlogPost
      />
      <article>
        <h1>{title}</h1>

        <InfoLine size="">
          <span>{author}</span>
          <span>{date}</span>
        </InfoLine>

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
        author
        date(formatString: "MMMM Do, YYYY", locale: "he-IL")
        banner {
          ...bannerImage720
        }
        bannerCredit
      }
      html
    }
  }
`;
