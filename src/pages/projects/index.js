import React from 'react'
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css'
import { Link,  graphql } from 'gatsby';

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

    projects: allMarkdownRemark( sort: {order: DESC, fields: frontmatter___date} ) {
      nodes {
        frontmatter {
          title
          slug
          stack
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
