import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import ArticleCard from '../components/articleCard';
import Layout from '../components/layout';
import SmallCard from '../components/smallCard';

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              author
              banner {
                ...bannerImage720
              }
              date
              language
              keywords
              slug
              subtitle
              summery
              title
            }
          }
        }
      }
    }
  `);

  const [latestArticle, ...articles] = data.allMarkdownRemark.edges;

  const maxWidth = '1170';
  return (
    <Layout
      maxWidth={maxWidth}
      css={css`
        padding: 3.35rem 1rem 0;
        @media (min-width: ${+maxWidth + 10}px) {
          padding: 3.35rem 0 0;
        }
      `}
    >
      <ArticleCard data={latestArticle.node} />
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem 10%;
          margin: 3.35rem 0;
        `}
      >
        {articles.map(({ node }) => (
          <SmallCard key={node.fields.slug} data={node} />
        ))}
      </div>
    </Layout>
  );
}
