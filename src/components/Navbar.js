import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {

    return (
        <nav className='header'>
            <h1>Dhiraj Kafle</h1>

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
