import { graphql, Link, useStaticQuery } from 'gatsby';
import InfoLine from '../components/infoLine';
import Layout from '../components/layout';
import format from '../lib/format';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout dir="rtl">
      <h1>רשימת פרסומים</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }, index) => {
          const { author, date, title } = node.frontmatter;
          return (
            <li key={index}>
              <Link to={node.fields.slug} style={{ display: 'inline-block' }}>
                <h2>{title}</h2>
                <InfoLine>
                  <span>{author}</span>
                  <span>{format(date)}</span>
                </InfoLine>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};
export default BlogPage;
