import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { Email } from "@material-ui/icons"
import { Phone } from "@material-ui/icons"

export default function Layout({ children }) 
{
  return (
    <div className="layout">

      <Navbar />

      <div className="content">
        { children }
      </div>


      <footer>
        <p style={{color: '#bbb'}}> Copyright &copy; 2022 Dhiraj Kafle 

        <span style={{padding: '10px', color: '#bbb'}}> <Phone /> +977 9847122181 </span>
        <span style={{padding: '10px', color: '#bbb'}}> < Email /> dhirajkafle553@gmail.com </span>
        </p>
      </footer>



    </div>
  )
}
