import React from 'react'
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css'
import { Link,  graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = ({ data }) => {

  const projects = data.projects.nodes
  const email = data.contact.siteMetadata.email
  

  return (
    <Layout>
      <div className={styles.portfolio_projects}>

        <h4><strong>Projects & Sites I have created</strong></h4>

        <div className={styles.projects}>
          {
            projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                  <GatsbyImage image={ getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData) } alt={project.frontmatter.title} quality={100} style={{ borderRadius: '15px' }} />
                  <h3>{ project.frontmatter.title }</h3>
                  <p>{ project.frontmatter.stack }</p>
                </div>
              </Link>
            ))
          }
        </div>
        <p>Like what you see ? Please email me at <span></span>{email} for a quote !</p>
      </div>
    </Layout>
  );

}
   
export default Projects


// export Multiple page query
export const query = graphql`

  query ProjectsPage {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
          slug
          stack
          thumb {
            childImageSharp {
              gatsbyImageData(
                width: 420
                height: 240
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        email
        phone
      }
    }
  }

`
