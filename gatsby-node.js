const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  /*const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const result = await graphql(`
  query MyQuery {
    allDatoCmsArticle {
      nodes {
        slug
      }
    }
  }
`)
    
    // Create blog post pages.
    result.data.allDatoCmsArticle.nodes.forEach( article => {
      createPage({
        // Path for this page — required
        path: `articles/${article.slug}`,
        component: blogPostTemplate,
        context: {
          slug:article.slug,
        },
      })
    }) */
}