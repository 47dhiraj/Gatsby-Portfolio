const path = require(`path`);


exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;



  // For projects pages
  const projectResult = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);



  projectResult.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve('./src/templates/project-details.js'),
      context: { slug: node.frontmatter.slug },
    });
  });






  // // For blogs pages
  // const blogResult = await graphql(`
  //   {
  //     allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blogs/" } }) {
  //       nodes {
  //         frontmatter {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `);


  // blogResult.data.allMarkdownRemark.nodes.forEach(node => {
  //   createPage({
  //     path: `/blogs/${node.frontmatter.slug}`,
  //     component: path.resolve('./src/templates/blog-details.js'),
  //     context: { slug: node.frontmatter.slug },
  //   });
  // });



};



// const path = require(`path`)


// exports.createPages = async ({ graphql, actions }) => {

//   const { data } = await graphql(`
//     query Articles {
//       allMarkdownRemark {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `)


//   data.allMarkdownRemark.nodes.forEach(node => {

//     actions.createPage({
//       path: '/projects/'+ node.frontmatter.slug,
//       component: path.resolve('./src/templates/project-details.js'),
//       context: { slug: node.frontmatter.slug }
//     })

//   })
  

// }

