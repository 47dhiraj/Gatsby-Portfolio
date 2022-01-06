import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {

    return (
        <nav className='header'>

            <a class="navbar__brand" href="/">
                <img class="navbar__logo" src="/avatar.png" alt="FullStack Web Developer, Nepal" />
                <strong class="navbar__title">Dhiraj Kafle</strong>
            </a>


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
