import Search from 'components/search';
import { graphql, useStaticQuery } from 'gatsby';

function BlogScreen() {
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
                productionUrl
                title
                categories
                keywords
                description: plainTextDescription
                banner {
                  ...bannerImage400
                }
              }
              excerpt(pruneLength: 190)
            }
          }
        }
      }
    `
  );
  return <Search blogposts={result.blogposts} />;
}

export default BlogScreen;
