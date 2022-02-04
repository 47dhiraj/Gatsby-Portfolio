import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/project-details.module.css'
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GitHub } from "@material-ui/icons"
import { IconButton } from "@material-ui/core"

const ProjectDetails = ({ data }) => {

  console.log(data)

  const { html } = data.markdownRemark
  const { title, stack, featuredImg, githublink } = data.markdownRemark.frontmatter

  return (

    <Layout>

      <div className={styles.details}>

        <h2 style={{ display: 'flex', flexDirection: 'row' }}>{title}
          <span style={{ marginLeft: 'auto' }}>
            <Link href={githublink} target='_blank'>
              <IconButton>
                <GitHub />
              </IconButton>
            </Link>
          </span>
        </h2>
        
        <h3>{stack}</h3>

        <div className={styles.featured}>

          {featuredImg && (
            <GatsbyImage image={ getImage(featuredImg.childImageSharp.gatsbyImageData) } alt={title} quality={100} style={{ borderRadius: '10px' }} />
          )}

        </div>

        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />

      </div>
      
    </Layout>
  )
}
 
export default ProjectDetails


export const query = graphql`

  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(height: 540, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        githublink
      }
    }
  }

`

