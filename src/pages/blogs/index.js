import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout';
import * as styles from '../../styles/blogs.module.css'
import { Link,  graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Zoom from "@material-ui/core/Zoom"



const Blogs = ({ data }) => {

  const blogs = data.blogs.nodes
  const email = data.contact.siteMetadata.email
  
  const [show, setShow] = useState(false)
  useEffect(() => setShow(true), [])


  return (
    <Layout>
      <div className={styles.portfolio_blogs}>

        <Zoom in={show} style={{ transitionDelay: show ? '250ms' : '0ms' }} >
          <h2><strong>Blogs I have posted ...</strong></h2>
        </Zoom>

        <div className={styles.blogs}>
          {
            blogs.map(blog => (
              <Link to={"/blogs/" + blog.frontmatter.slug} key={blog.id}>
                <div>

                  {blog.frontmatter.thumb && (
                    <GatsbyImage image={ getImage(blog.frontmatter.thumb.childImageSharp.gatsbyImageData) } alt={blog.frontmatter.title} quality={100} style={{ borderRadius: '12px' }} />
                  )} 
                  
                  <h3>{ blog.frontmatter.title }</h3>
                  <p>{ blog.frontmatter.description }</p>
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
   
export default Blogs




// export Multiple page query
export const query = graphql`

  query BlogsPage {
    blogs: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
          slug
          description
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
