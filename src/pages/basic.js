import { css } from '@emotion/core';
import Layout from 'components/layout';
import SEO from 'components/seo';
import SmallCard from 'components/smallCard';
import { graphql, useStaticQuery } from 'gatsby';
import theme from 'styles/theme';

// hard coded rtl page !
const DIRECTION = 'rtl';

function BlogPage() {
  const result = useStaticQuery(
    graphql`
      query {
        posts: allMarkdownRemark(
          filter: { fields: { categories: { in: "פנטזי למתחילים" } } }
          sort: {
            fields: [frontmatter___date, frontmatter___title]
            order: [DESC, ASC]
          }
        ) {
          nodes {
            ...cardFields
            fields {
              summery: subtitle
            }
            ...bannerField400
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
        padding: 3.35rem 0 0;
      `}
    >
      <SEO title="פנטזי למתחילים" />
      <div>
        <h1 css={{ marginBottom: 20, textAlign: 'center' }}>פנטזי למתחילים</h1>
        <p
          css={css`
            background-color: ${theme.colors.darkGray};
            border-inline-start: 5px solid ${theme.brand.primary};
            color: ${theme.colors.gray};
            margin-left: 2rem;
            margin-right: 2rem;
            padding: 1rem;
            span {
              font-weight: bold;
            }
          `}
        >
          בעמוד זה תוכלו למצוא מספר מאמרים מקיפים שילמדו אתכם את כל הדברים
          החשובים שצריכים לדעת בכדי לבנות קבוצה מנצחת
        </p>
      </div>
      <div
        dir={DIRECTION}
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 5rem;
          margin: 3.35rem 0;
          height: 100%;
        `}
      >
        {result.posts.nodes.map(node => (
          <SmallCard key={node.fields.slug} node={node} />
        ))}
      </div>
    </Layout>
  );
}

export default BlogPage;
