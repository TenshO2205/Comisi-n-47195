import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
        <b>Copyright © 2023</b>
        <Link to="/contacto" className='contact-btn'>Contacto</Link>
    </footer>
    </>
  )
}

export default Footer