import { css } from '@emotion/core';
import ArticleCard from 'components/articleCard';
import Layout from 'components/layout';
import SEO from 'components/seo';
import SmallCard from 'components/smallCard';
import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

// hard coded rtl page !
const DIRECTION = 'rtl';

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "field.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      latestPosts: allMarkdownRemark(
        filter: { fields: { categories: { nin: "פנטזי א-ב" } } }
        sort: {
          fields: [frontmatter___date, frontmatter___title]
          order: [DESC, ASC]
        }
        limit: 5
      ) {
        edges {
          node {
            ...cardFields
            ...articleBanner
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { fields: { categories: { in: "פנטזי א-ב" } } }
        sort: {
          fields: [frontmatter___date, frontmatter___title]
          order: [DESC, ASC]
        }
        limit: 6
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

  const imageData = data.desktop.childImageSharp.fluid;
  const latestPosts = data.latestPosts.edges;
  const cards = data.posts.edges;

  const maxWidth = '1170';
  return (
    <BackgroundImage
      css={css`
        width: 100%;
        min-height: 500px;
        background-attachment: fixed;
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        &::before,
        &::after {
          filter: brightness(40%);
        }
      `}
      Tag="section"
      fluid={imageData}
    >
      <Layout
        maxWidth={maxWidth}
        css={css`
          display: flex;
          flex-direction: column;
          padding: 0 1rem;

          @media (min-width: ${+maxWidth + 10}px) {
            padding: 0;
          }

          .latest-posts {
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 2rem;
          }

          .cards {
            margin: 0 auto 3rem;

            .cards-title {
              font-size: 1.35rem;
              line-height: 1;
              font-weight: 400;
              margin-bottom: 1rem;
            }

            @media (min-width: 900px) {
              width: 70%;

              :last-child {
                margin-bottom: 4.5rem;
              }

              .cards-title {
                font-size: 2rem;
              }
            }
          }
        `}
      >
        <SEO skipTitleTemplate />
        <section
          css={css`
            margin: 2rem auto 3rem;
            line-height: 1.1;
            text-align: center;

            h1 {
              font-size: 2rem;
            }

            .text-sm {
              font-size: 66%;
              letter-spacing: 5px;
            }

            .text-xl {
              letter-spacing: 0.2px;
            }

            .cta-container {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 0 1.5rem;

              a {
                border: 0.2em solid var(--link_color);
                border-radius: 0.3em;
                font-size: 1.1rem;
                font-weight: 500;
                margin-top: 1.5rem;
                padding: 0.5em 1em;

                text-decoration: none;
                text-align: center;
                transition: all 0.3s ease-in;
              }

              .cta-one {
                background-color: var(--link_color);
                color: #000000;
                &:hover,
                &:focus {
                  background-color: transparent;
                  color: var(--link_color);
                }
              }

              .cta-two {
                background-color: transparent;
                color: var(--link_color);
                &:hover,
                &:focus {
                  background-color: var(--link_color);
                  color: #000000;
                }
              }
            }

            @media (min-width: 900px) {
              text-align: right;
              margin: 4.5rem auto;
              line-height: 1.1;

              h1 {
                font-size: 3rem;
              }

              .cta-container {
                flex-direction: row;
                margin-top: 1rem;
                padding: 0;
                a {
                  font-size: 1.45rem;
                  padding: 0.5em 1.5em;
                }
              }
            }
          `}
        >
          <h1>
            <div>המנג&#39;ר</div>
            <div className="text-sm">ילמד אותך כל מה שצריך לדעת על</div>
            <div className="text-xl">Fantasy Premier League</div>
          </h1>
          <div className="cta-container">
            <Link
              className="cta-one"
              to="/blog"
              aria-label="לארכיון המאמרים המלא"
            >
              לארכיון המאמרים המלא
            </Link>
            <Link className="cta-two" to="/basic" aria-label="פנטזי א-ב">
              פנטזי א-ב
            </Link>
          </div>
        </section>

        <section className="cards">
          <h2 className="cards-title">מאמרים אחרונים</h2>
          <div className="latest-posts" dir={DIRECTION}>
            {latestPosts.map(({ node }) => (
              <ArticleCard key={node.fields.slug} noImage node={node} />
            ))}
          </div>
        </section>

        <section className="cards">
          <h2 className="cards-title">פנטזי א-ב</h2>
          <div
            dir={DIRECTION}
            css={css`
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              grid-gap: 2rem 6%;
            `}
          >
            {cards.map(({ node }) => (
              <SmallCard key={node.fields.slug} node={node} noImage />
            ))}
          </div>
        </section>
      </Layout>
    </BackgroundImage>
  );
}
