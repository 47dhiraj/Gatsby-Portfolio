import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"


export default function Home() {

  return (
    <Layout>

      <section>
        
        <div>
          <h2>Code The Logic !</h2>
          <h2>IT Engineer and Passionate Pragmatice Developer</h2>

          <Link to="/contact">Get In Touch</Link>
        </div>

      </section>

    </Layout>
  )

}
