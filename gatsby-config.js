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

    {                                       // dynamic images haru graphQL query lagayera matra access garna milcha, so tei vayera images ko lagi source dinai parcha
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,   // projects markdown file haru ko lagi source diyeko
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },

    // {
    //   resolve: `gatsby-source-filesystem`,  // blogs markdown file haru ko lagi source diyeko
    //   options: {
    //     name: `blogs`,
    //     path: `${__dirname}/src/blogs/`,
    //   },
    // },

  ],


  siteMetadata: {                           // site ko metadata chai vani yesari lekhna sakincha

    title: `Dhiraj Kafle`,
    description: `This static site is my Portfolio.`,
    copyright: `Copyright &copy; 2022 Dhiraj Kafle`,
    email: `dhirajkafle553@gmail.com`,
    phone: `+977 9847122181`,

  },

}
