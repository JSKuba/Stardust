const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
  }

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const indexTemplate = path.resolve('./src/pages/index.js')
    const res = await graphql(`
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
    `)

    res.data.allMarkdownRemark.edges.forEach(v => {
        createPage({
            component: indexTemplate,
            path: `/${v.node.fields.slug}`,
            context: {
                slug: v.node.fields.slug
            }
        })
    })

}