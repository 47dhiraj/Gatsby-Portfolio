import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/blog-details.module.css'
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GitHub } from "@material-ui/icons"
import { IconButton } from "@material-ui/core"


const BlogDetails = ({ data }) => {

  console.log(data)

  const { html } = data.markdownRemark
  const { title, description, pubDate, featuredImgs } = data.markdownRemark.frontmatter

  return (

    <Layout>

      <div className={styles.details}>

        <h2 style={{ display: 'flex', flexDirection: 'row' }}>{title}</h2>

        <h3>{description}</h3>
        
        <h5>{pubDate}</h5>

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
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
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

export default BlogDetails



export const query = graphql`

  query BlogDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        description
        pubDate
        featuredImgs {
          childImageSharp {
            gatsbyImageData(width: 1182, layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }

`

