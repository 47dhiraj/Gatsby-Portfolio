import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import HomeIcon from "@material-ui/icons/Home";


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
                    <strong style={{ fontSize: '1em', maxWidth: '100%' }}>{ title }</strong>
                </Link>

            </div>



            <div className="links">

                <Link to="/" className="nav-link">

                    <HomeIcon className="nav-icon" />

                    <span className="nav-text"> Home </span>

                </Link>

                <Link to="/about"> About Me </Link>
                <Link to="/skills"> Skills </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/blogs"> Blogs </Link>

                {/* <a rel="noopener noreferrer" href={`./pdf/resume.pdf`} target="_blank"> View Resume </a> */}

            </div>

        </nav>
    )
}
