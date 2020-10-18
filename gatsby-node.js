const { createFilePath } = require('gatsby-source-filesystem');
const slugify = require('@sindresorhus/slugify');
const path = require('path');
const config = require('./config/website');

function trim(text) {
  return (text || '').trim();
}

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

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: 'title',
      node,
      value: trim(node.frontmatter.title),
    });

    createNodeField({
      name: 'subtitle',
      node,
      value: trim(node.frontmatter.subtitle),
    });

    createNodeField({
      name: 'summery',
      node,
      value: trim(node.frontmatter.summery),
    });

    createNodeField({
      name: 'language',
      node,
      value: node.frontmatter.language || 'he',
    });

    createNodeField({
      name: 'author',
      node,
      value: trim(node.frontmatter.author) || 'המערכת',
    });

    const description = trim(node.frontmatter.description);
    createNodeField({
      name: 'description',
      node,
      value: description,
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    const productionUrl = new URL(config.siteUrl);
    productionUrl.pathname = slug;

    createNodeField({
      name: 'productionUrl',
      node,
      value: productionUrl.toString(),
    });

    createNodeField({
      name: 'date',
      node,
      value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
    });

    createNodeField({
      name: 'banner',
      node,
      value: node.frontmatter.banner,
    });

    createNodeField({
      name: 'bannerCredit',
      node,
      value: node.frontmatter.bannerCredit,
    });

    createNodeField({
      name: 'categories',
      node,
      value: node.frontmatter.categories || [],
    });

    createNodeField({
      name: 'keywords',
      node,
      value: node.frontmatter.keywords || [],
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

  const blogTemplate = path.resolve(`./src/templates/blog.js`);
  edges.forEach(({ node }) => {
    const slug = node.fields.slug;
    createPage({
      path: slug,
      component: blogTemplate,
      context: { slug },
    });
  });
};

const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``));
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page);
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path);
  if (page.path !== oldPage.path) {
    deletePage(oldPage);
    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
