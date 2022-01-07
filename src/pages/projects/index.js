import React from 'react'
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css'
import { Link,  graphql } from 'gatsby';

const Projects = ({ data }) => {

  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.portfolio_projects}>

        <h4>Projects & Sites I have created</h4>

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
        
      </div>
    </Layout>
  );

}
   
export default Projects


// export page query
export const query = graphql`

  query ProjectsPage {
    allMarkdownRemark( sort: {order: DESC, fields: frontmatter___date} ) {
      nodes {
        frontmatter {
          title
          slug
          stack
        }
        id
      }
    }
  }

`
