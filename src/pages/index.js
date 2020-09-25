import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import ArticleCard from '../components/articleCard';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SmallCard from '../components/smallCard';

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      latestPost: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1
      ) {
        edges {
          node {
            ...cardFields
            ...bannerField720
          }
        }
      }
      posts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        skip: 1
      ) {
        edges {
          node {
            ...cardFields
            ...bannerField400
          }
        }
      }
    }
  `);

  const posts = data.posts.edges;
  const cards = [...posts, ...posts, ...posts, ...posts, ...posts];

  const maxWidth = '1170';
  return (
    <Layout
      maxWidth={maxWidth}
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0 1rem;

        .main-card {
          margin: 2rem 0;
        }

        @media (min-width: ${+maxWidth + 10}px) {
          padding: 0;

          .main-card {
            margin: 3.35rem 0;
          }
        }
      `}
    >
      <SEO />
      <ArticleCard className="main-card" node={data.latestPost.edges[0].node} />
      <div
        dir="rtl"
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem 10%;
          margin-bottom: 3.35rem;
        `}
      >
        {cards.map(({ node }, i) => (
          <SmallCard key={node.fields.slug + i} node={node} />
        ))}
      </div>
    </Layout>
  );
}
