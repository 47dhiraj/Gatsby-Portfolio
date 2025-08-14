const path = require(`path`);


// Add sourceInstanceName to each MarkdownRemark node
exports.onCreateNode = ({ node, getNode, actions }) => {

  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {

    const parent = getNode(node.parent)

    createNodeField({
      node,
      name: "sourceInstanceName",
      value: parent.sourceInstanceName, // 'blogs' or 'projects' from gatsby-source-filesystem
    })

  }

}




exports.createPages = async ({ graphql, actions }) => {


  const { createPage } = actions



  
  // -----------------------------
  // Create Project Pages
  // -----------------------------
  const projectResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { sourceInstanceName: { eq: "projects" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  projectResult.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug },
    })
  })





  // -----------------------------
  // Create Blog Pages
  // -----------------------------
  const blogResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { sourceInstanceName: { eq: "blogs" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  blogResult.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/blogs/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/blog-details.js'),
      context: { slug: node.frontmatter.slug },
    })
  })




}







// Old Code:



// const path = require(`path`);


// exports.createPages = async ({ graphql, actions }) => {

//   const { createPage } = actions;



//   // For projects pages
//   const projectResult = await graphql(`
//     {
//       allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `);



//   projectResult.data.allMarkdownRemark.nodes.forEach(node => {
//     createPage({
//       path: `/projects/${node.frontmatter.slug}`,
//       component: path.resolve('./src/templates/project-details.js'),
//       context: { slug: node.frontmatter.slug },
//     });
//   });






//   // For blogs pages
//   const blogResult = await graphql(`
//     {
//       allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blogs/" } }) {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `);


//   blogResult.data.allMarkdownRemark.nodes.forEach(node => {
//     createPage({
//       path: `/blogs/${node.frontmatter.slug}`,
//       component: path.resolve('./src/templates/blog-details.js'),
//       context: { slug: node.frontmatter.slug },
//     });
//   });



// };

