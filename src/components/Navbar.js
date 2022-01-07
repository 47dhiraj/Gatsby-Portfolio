import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {

    return (
        <nav className='header'>


            <div class="navbar__brand">

                <img class="navbar__logo" src="/avatar.png" alt="FullStack Web Developer, Nepal" />

                <Link to="/">
                    <strong style={{fontSize: '1.6em', maxWidth: '100%' }}>Dhiraj Kafle</strong>
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
