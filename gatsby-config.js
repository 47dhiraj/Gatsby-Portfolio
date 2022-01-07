/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [

    `gatsby-transformer-remark`,

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,             // Needed for dynamic images

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },

  ],

  
  siteMetadata: {

    title: `Dhiraj Kafle`,
    description: `This static site is my Portfolio.`,
    copyright: `Copyright &copy; 2022 Dhiraj Kafle`,
    email: `dhirajkafle553@gmail.com`,
    phone: `+977 9847122181`,

  },

}
