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
        <p style={{color: '#fff', margin: '5px auto '}}> &copy; 2025 - { title } - All rights reserved.
          <span style={{paddingLeft: '25px', color: '#fff'}}> { email } </span>
        </p>
      </footer>



      <footer>

          <p style={{ color: '#fff', margin: '5px auto' }}>

            &copy; 2025 - {title} - All rights reserved.

            <span style={{ paddingLeft: '25px' }}>

              <a
                href={`mailto:${email}`}
                className="footer-email"
                onClick={(e) => {
                  e.preventDefault();
                  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
                  window.open(gmailUrl, "_blank"); // try Gmail
                  // fallback: if Gmail doesn't load, mailto will still exist
                  setTimeout(() => { window.location.href = `mailto:${email}`; }, 2000);
                }}
              >
                {email}
              </a>

            </span>

          </p>
      </footer>



    </div>
  )
}
