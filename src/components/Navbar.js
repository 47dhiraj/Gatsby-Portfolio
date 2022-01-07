import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

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

                <img class="navbar__logo" src="/avatar.png" alt="FullStack Web Developer, Nepal" />

                <Link to="/">
                    <strong style={{ fontSize: '1.5em', maxWidth: '100%' }}>{ title }</strong>
                </Link>

            </div>



            <div className="links">

                <Link to="/"> Home </Link>
                <Link to="/about"> About Me </Link>
                <Link to="/skills"> Skills </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/resume"> Resume</Link>

            </div>

        </nav>
    )
}
