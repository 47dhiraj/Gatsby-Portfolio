import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {

  return (
    <Layout>

      <section className={styles.header}>
        
        <div>
          <h2>Code The Logic !</h2>
          <h3>IT Engineer and Passionate Pragmatice Developer</h3>

          <Link className={styles.btn} to="/contact">Get In Touch</Link>
        </div>

      </section>

    </Layout>
  )

}
