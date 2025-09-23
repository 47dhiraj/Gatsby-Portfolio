import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css'
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Zoom from "@material-ui/core/Zoom"



const Projects = ({ data }) => {

  const projects = data.projects.nodes
  const email = data.contact.siteMetadata.email

  const [show, setShow] = useState(false)
  useEffect(() => setShow(true), [])


  return (

    <Layout>

      <div className={styles.portfolio_projects}>

        <Zoom in={show} style={{ transitionDelay: show ? '300ms' : '0ms' }} >

          <div className={styles.hoverWrapper}>

            <h2><strong>Projects created</strong></h2>
            
          </div>

          {/* <h2><strong>Projects created</strong></h2> */}
        </Zoom>

        <div className={styles.projects}>
          {
            projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>

                <div>

                  {project.frontmatter.thumb && (
                    <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt={project.frontmatter.title} quality={100} style={{ borderRadius: '12px' }} />
                  )}

                  <h3 className={styles.project_title}>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
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
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
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