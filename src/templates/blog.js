import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import theme from '../styles/theme';

const blogStyle = css`
  width: 100%;
  margin: 0px auto;
  max-width: 800px;
  padding: 20px 40px 40px;
  background-color: ${theme.colors.darkGray};

  h2 {
    margin-top: 3.1rem;
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
  tr:nth-child(2n) {
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
  return (
    <Layout>
      <div dir="rtl" css={blogStyle}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p>{data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  );
};

export default blog;

export const pageQuery = graphql`
  query getMarkdownFile($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;
