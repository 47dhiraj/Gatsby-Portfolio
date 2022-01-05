import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'


export default function Layout({ children }) 
{
  return (
    <div className="layout">

      <Navbar />

      <div className="content">
        { children }
      </div>

      <footer style={{ marginTop: '410px'}}>
        <p>Copyright &copy; 2022 Dhiraj's Portfolio</p>
      </footer>

    </div>
  )
}
