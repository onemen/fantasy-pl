import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  console.log(data);
  return (
    <Layout>
      <div dir="rtl">
        <h1>בלוגים</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            return (
              <li key={index}>
                <Link
                  to={`/blog/${node.fields.slug}`}
                  style={{ display: 'inline-block' }}
                >
                  <h2>{node.frontmatter.title}</h2>
                  <p>{node.frontmatter.date}</p>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};
export default BlogPage;
