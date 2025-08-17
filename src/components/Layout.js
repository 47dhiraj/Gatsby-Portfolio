import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { Email } from "@material-ui/icons"
import { Phone } from "@material-ui/icons"
import { graphql, useStaticQuery } from 'gatsby'

export default function Layout({ children }) 
{

  const data = useStaticQuery(graphql`                   
    {
      site {
        siteMetadata {
          email
          phone
        }
      }
    }
  `)

  const { title, email, phone } = data.site.siteMetadata
  

  return (
    <div className="layout">

      <Navbar />

      <div className="content">
        { children }
      </div>


      <footer>
        <p style={{color: '#bbb', margin: '8px auto '}}> Copyright - DHIRAJ KAFLE &copy; 2022 { title }
          <span style={{paddingLeft: '60px', color: '#bbb'}}> < Email /> { email } </span>
        </p>
      </footer>



    </div>
  )
}
