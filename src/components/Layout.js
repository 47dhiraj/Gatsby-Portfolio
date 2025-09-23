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
          title
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

          <p style={{ color: '#fff', margin: '5px auto' }}>
            &copy; 2025 - {title} - All rights reserved.

            <span style={{ paddingLeft: '25px' }}>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-email"
              >
                {email}
              </a>

            </span>

          </p>
      </footer>


      {/* 
        <footer>
          <p style={{color: '#fff', margin: '5px auto '}}> &copy; 2025 - { title } - All rights reserved.
            <span style={{paddingLeft: '25px', color: '#fff'}}> { email } </span>
          </p>
        </footer> 
      */}


    </div>
  )
}
