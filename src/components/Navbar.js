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


            <div className="navbar__brand">
                <StaticImage
                    src="../images/avatar.png"
                    alt="A dinosaur"
                    placeholder="blurred"
                    layout="constrained"
                    width={35}
                />

                <Link className="nav-title-link" to="/">
                    <strong style={{ fontSize: '1.1em', maxWidth: '100%' }}>{title}</strong>
                </Link>
            </div>


            <div className="links">

                <Link
                    to="/"
                    getProps={({ isCurrent }) =>
                        isCurrent ? { className: "active-link", onClick: e => e.preventDefault() } : {}
                    }
                >
                    <HomeIcon className="nav-icon" />
                    <span className="nav-text">Home</span>
                </Link>

                <Link
                    to="/about"
                    getProps={({ isCurrent }) =>
                        isCurrent ? { className: "active-link", onClick: e => e.preventDefault() } : {}
                    }
                >
                    About Me
                </Link>

                <Link
                    to="/skills"
                    getProps={({ isCurrent }) =>
                        isCurrent ? { className: "active-link", onClick: e => e.preventDefault() } : {}
                    }
                >
                    Skills
                </Link>

                <Link
                    to="/projects"
                    getProps={({ isCurrent }) =>
                        isCurrent ? { className: "active-link", onClick: e => e.preventDefault() } : {}
                    }
                >
                    Projects
                </Link>

                <Link
                    to="/blogs"
                    getProps={({ isCurrent }) =>
                        isCurrent ? { className: "active-link", onClick: e => e.preventDefault() } : {}
                    }
                >
                    Blogs
                </Link>
                
            </div>

        </nav>

    )

}
