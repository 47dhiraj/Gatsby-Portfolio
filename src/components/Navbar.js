import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import HomeIcon from "@material-ui/icons/Home"
import { useLocation } from '@reach/router'


export default function Navbar() {


  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])



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


  const location = useLocation()
  const currentPath = location.pathname


  const links = [
    { to: '/', label: 'Home', icon: <HomeIcon className="nav-icon" /> },
    { to: '/about/', label: 'About Me' },
    { to: '/skills/', label: 'Skills' },
    { to: '/projects/', label: 'Projects' },
    { to: '/blogs/', label: 'Blogs' },
  ]

  return (

    <nav className={`header ${scrolled ? 'scrolled' : ''}`}>

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

        {links.map(link => {

          const isActive = link.to === '/' ? currentPath === '/' : currentPath.startsWith(link.to)

          return (

            <Link
              key={link.to}
              to={link.to}
              className={isActive ? 'active-link' : ''}
              onClick={isActive ? e => e.preventDefault() : undefined}
            >

              {link.icon && link.icon}

              <span>{link.label}</span>

            </Link>
          )

        })}

      </div>

    </nav>

  )
}








// // ALTERNATIVE CODE

// import React from 'react'
// import { graphql, Link, useStaticQuery } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"
// import HomeIcon from "@material-ui/icons/Home"
// import { useLocation } from '@reach/router'

// export default function Navbar() {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   const { title } = data.site.siteMetadata


//   const location = useLocation()
//   const currentPath = location.pathname


//   const normalizePath = path => path.replace(/\/$/, "")


//   const links = [
//     { to: '/', label: 'Home', icon: <HomeIcon className="nav-icon" /> },
//     { to: '/about', label: 'About Me' },
//     { to: '/skills', label: 'Skills' },
//     { to: '/projects', label: 'Projects' },
//     { to: '/blogs', label: 'Blogs' },
//   ]



//   return (

//     <nav className="header">

//       <div className="navbar__brand">
//         <StaticImage
//           src="../images/avatar.png"
//           alt="A dinosaur"
//           placeholder="blurred"
//           layout="constrained"
//           width={35}
//         />
//         <Link className="nav-title-link" to="/">
//           <strong style={{ fontSize: '1.1em', maxWidth: '100%' }}>{title}</strong>
//         </Link>
//       </div>


//       <div className="links">

//         {links.map(link => {

//           // Check if the current path matches the link path (trailing slash safe)
//           const isActive = link.to === '/' ? normalizePath(currentPath) === '/' : normalizePath(currentPath).startsWith(normalizePath(link.to))

//           return (

//             <Link
//               key={link.to}
//               to={link.to}
//               className={isActive ? 'active-link' : ''}
//               onClick={isActive ? e => e.preventDefault() : undefined}
//             >

//               {link.icon && link.icon}

//               <span>{link.label}</span>

//             </Link>

//           )

//         })}

//       </div>

//     </nav>
//   )

// }