import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {

    const data = useStaticQuery(graphql`                   
        {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata


    return (
        <nav className='header'>


            <div class="navbar__brand">

                <StaticImage src="../images/avatar.png" alt="A dinosaur" placeholder="blurred" layout="constrained" width={35} />
                {/* <img class="navbar__logo" src="/avatar.png" alt="FullStack Web Developer, Nepal" /> */}

                <Link to="/">
                    <strong style={{ fontSize: '0.9em', maxWidth: '100%' }}>{ title }</strong>
                </Link>

            </div>



            <div className="links">

                <Link to="/"> Home </Link>
                <Link to="/about"> About Me </Link>
                <Link to="#"> Blogs </Link>
                <Link to="/skills"> Skills </Link>
                <Link to="/projects"> Projects </Link>

                {/* <a rel="noopener noreferrer" href={`./pdf/resume.pdf`} target="_blank"> View Resume </a> */}

            </div>

        </nav>
    )
}
