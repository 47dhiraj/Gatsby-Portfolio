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

import { StaticImage } from "gatsby-plugin-image"



const socialItems = [
  {icon: GitHub, url: "https://github.com/47dhiraj"},
  {icon: LinkedIn, url: "https://www.linkedin.com/in/dhiraj-kafle-4a19781a3/"},
  {icon: Facebook, url: "https://www.facebook.com/dhirajkafle553/"},
]


export default function Home() {


  const [show, setShow] = useState(false)
  useEffect(() => setShow(true), [])

  return (
    <Layout>

      <section className={styles.header}>
        
        <Zoom in={show} style={{ transitionDelay: show ? '300ms' : '0ms' }}>

          <div>

            <h2>Code, The Logic !</h2>

            <h3>Passionate Pragmatice Developer</h3>   

            <h4 className={styles.typing}>

              <span>Software Engineer</span>

              <span>Data Engineer</span>

            </h4>

          </div>

        </Zoom>


        <a className={styles.btn} rel="noopener noreferrer" href={`./pdf/resume.pdf`} target="_blank"> View CV </a>



        <div style={{ display: 'flex', flexDirection: 'row'}}>

          <Grid Container style={{ marginTop: 'auto', marginLeft: 'auto' }}>
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
          
          <StaticImage src="../images/profile.jpg" alt="Profile Pic" placeholder="blurred" layout="constrained" width={420} height={600} style={{borderRadius: '25px'}} />

        </div>
        

      </section>

    </Layout>
  )

}



