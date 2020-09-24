import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Markdown from 'react-markdown';
import InfoLine from '../components/infoLine';
import Layout from '../components/layout';
import format from '../lib/format';
import theme from '../styles/theme';

const blogStyle = css`
  width: 100%;
  margin: 0px auto;
  max-width: 800px;
  padding: 20px 40px 40px;
  background-color: ${theme.colors.darkGray};

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
    margin: 0 auto;
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
`;

const blog = ({ data, ...rest }) => {
  const {
    author,
    banner,
    bannerCredit,
    date,
    title,
  } = data.markdownRemark.fields;

  return (
    <Layout dir="rtl" css={blogStyle} frontmatter={data.markdownRemark.fields}>
      <h1
        css={css`
          font-size: 2.25rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          text-align: center;
        `}
      >
        {title}
      </h1>

      <InfoLine size="">
        <span>{author}</span>
        <span>{format(date)}</span>
      </InfoLine>

      {banner && (
        <div
          css={css`
            text-align: center;
            margin: 1rem auto;
            p {
              margin-bottom: 0;
            }
            @media (max-width: 767px) {
              padding: 0;
            }
          `}
        >
          <Img
            css={{ maxHeight: '400px' }}
            fluid={banner.childImageSharp.fluid}
          />
          {bannerCredit ? <Markdown>{bannerCredit}</Markdown> : null}
        </div>
      )}

      <article
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      ></article>
    </Layout>
  );
};

export default blog;

export const pageQuery = graphql`
  query getMarkdownFile($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        title
        author
        date
        banner {
          ...bannerImage720
        }
        bannerCredit
      }
      html
    }
  }
`;
