const { createFilePath } = require('gatsby-source-filesystem');
const slugify = require('@sindresorhus/slugify');
const path = require('path');

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const parentNode = getNode(node.parent);
    const { createNodeField } = actions;
    // const slug = path.basename(node.fileAbsolutePath, '.md');
    let slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: `pages` });

    if (node.fileAbsolutePath.includes('content/blog/')) {
      slug = `/blog/${node.frontmatter.slug || slugify(parentNode.name)}`;
    }

    console.log({ slug, fileAbsolutePath: node.fileAbsolutePath });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { data, errors } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    return Promise.reject(errors);
  }

  const { edges } = data.allMarkdownRemark;
  if (!edges.length) {
    return Promise.reject('There are no posts!');
  }

  const { createPage } = actions;

  edges.forEach(({ node }) => {
    const slug = node.fields.slug;
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/blog.js`),
      context: { slug },
    });
  });
};
