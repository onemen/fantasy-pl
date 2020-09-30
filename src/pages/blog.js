import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Search from '../components/search';
import SEO from '../components/seo';

function BlogPage() {
  const result = useStaticQuery(
    graphql`
      query {
        blogposts: allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: {
            # frontmatter: { published: { ne: false } }
            fileAbsolutePath: { regex: "//content/blog//" }
          }
        ) {
          edges {
            node {
              fields {
                id
                slug
                date(difference: "milliseconds")
                title
                categories
                keywords
                description: plainTextDescription
                banner {
                  ...bannerImage260
                }
              }
              excerpt(pruneLength: 190)
            }
          }
        }
      }
    `
  );

  return (
    <Layout
      css={css`
        width: 100%;
        margin: 0px auto;
        padding: 40px 0;
        min-height: calc(100vh - 8rem + 1px);
      `}
    >
      <SEO title="חיפוש בארכיון" />
      <Search blogposts={result.blogposts} />
    </Layout>
  );
}

export default BlogPage;
