import { css } from '@emotion/core';
import Layout from 'components/layout';
import Search from 'components/search';
import SEO from 'components/seo';
import { graphql, useStaticQuery } from 'gatsby';

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
                title
                categories
                keywords
                description
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
      <h1 css={{ visibility: 'hidden' }}>חיפוש בארכיון מאמרים</h1>
      <Search blogposts={result.blogposts} />
    </Layout>
  );
}

export default BlogPage;
