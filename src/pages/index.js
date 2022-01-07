import React, {useState, useEffect} from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

import { GitHub } from "@material-ui/icons"
import { LinkedIn } from "@material-ui/icons"
import { Facebook } from "@material-ui/icons"
import Grid  from "@material-ui/core/Grid"
import { IconButton } from "@material-ui/core"

import Zoom from "@material-ui/core/Zoom"


const socialItems = [
  {icon: GitHub, url: "https://github.com/47dhiraj"},
  {icon: LinkedIn, url: "https://www.linkedin.com/in/dhiraj-kafle-4a19781a3/"},
  {icon: Facebook, url: "https://www.facebook.com/dhirajkafle553/"},
]

export default function Home({ data }) {

  const { title, description } = data.site.siteMetadata

  const [show, setShow] = useState(false)
  useEffect(() => setShow(true), [])

  return (
    <Layout>

      <section className={styles.header}>
        
        <Zoom in={show} style={{ transitionDelay: show ? '200ms' : '0ms' }}>
          <div>
            <h2>Code, The Logic !</h2>
            <h3>IT Engineer and Passionate Pragmatice Developer</h3>

            <Link className={styles.btn} to="/resume"> View Resume </Link>
          </div>
        </Zoom>


        <div style={{ display: 'flex', flexDirection: 'row'}}>

          <Grid Container style={{ marginTop: 'auto' }}>
            {
              socialItems.map((item) => (
                <Grid item  key={item.icon}>
                  <Link href={item.url} target='_blank'>
                    <IconButton>
                      <item.icon />
                    </IconButton>
                  </Link>
                </Grid>
              ))
            }
          </Grid>

          <img src="/profile.jpg" alt="Profile Pic" style={{ maxWidth: '100%', height: '420px', borderRadius: '25px'  }} />

        </div>
        
        <p>{ title } - { description }</p>

      </section>

    </Layout>
  )

}



export const query = graphql`

  query SiteInfo {
    site {
      siteMetadata {
        title
        description
      }
    }
  }

`
