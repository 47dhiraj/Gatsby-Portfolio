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
  const { title, stack, featuredImgs, githublink } = data.markdownRemark.frontmatter

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

          {featuredImgs && featuredImgs.map((img, idx) => (
            <GatsbyImage
              key={idx}
              image={getImage(img.childImageSharp.gatsbyImageData)}
              alt={`${title} - Image ${idx + 1}`}
              quality={100}
              style={{
                borderRadius: "10px",
                marginBottom: "3rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
              }}
              imgStyle={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px"
              }}
            />
          ))}

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
        featuredImgs {
          childImageSharp {
            gatsbyImageData(width: 1182, layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        githublink
      }
    }
  }

`

