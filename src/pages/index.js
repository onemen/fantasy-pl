import { css } from '@emotion/core';
import ArticleCard from 'components/articleCard';
import Layout from 'components/layout';
import SEO from 'components/seo';
import SmallCard from 'components/smallCard';
import { graphql, Link, useStaticQuery } from 'gatsby';

// hard coded rtl page !
const DIRECTION = 'rtl';

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
        limit: 9
      ) {
        totalCount
        edges {
          node {
            ...cardFields
            ...bannerField400
          }
        }
      }
    }
  `);

  // const cards = data.posts.edges;
  // for testing
  data.posts.totalCount = 100;
  const cards = [...data.posts.edges, ...data.posts.edges, ...data.posts.edges];
  cards.sort(() => (Math.random() < 0.5 ? 1 : -1));

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
      <SEO skipTitleTemplate />
      <ArticleCard
        dir={DIRECTION}
        className="main-card"
        node={data.latestPost.edges[0].node}
      />
      <div
        dir={DIRECTION}
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
      {data.posts.totalCount > 10 && (
        <Link
          css={css`
            background-color: var(--link_color);
            border: 0.1em solid var(--title-color);
            border-radius: 0.3em;
            font-size: 1.2rem;
            margin: 4rem auto;
            padding: 0.5em 1.5em;

            text-decoration: none;
            text-align: center;
            transition: all 0.5s ease-in;
            color: #ffffff;

            &:hover,
            &:focus {
              color: var(--title-color);
              background-color: transparent;
            }
          `}
          className="nav-item"
          activeClassName="active-nav-item"
          to="/blog"
          aria-label="blog"
        >
          לצפיה וחיפוש בארכיון המאמרים
        </Link>
      )}
    </Layout>
  );
}
