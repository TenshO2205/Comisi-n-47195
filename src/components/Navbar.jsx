import React from 'react'
import image from '../assets/logos/logo.jpg'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>

        <nav>

            <div className="imageContainer">
                <Link to='/'><img src={image} alt="" className='logo'/></Link>
            </div>

            <div className="listContainer">
                <ul>
                    <li><Link to='/' className='nav-link'>Inicio</Link></li>
                </ul>
                <ul>
                    <li><Link to='/productos/pulseras' className='nav-link'>Pulseras</Link></li>
                </ul>
                <ul>
                    <li><Link to='/productos/cadenas' className='nav-link'>Cadenas</Link></li>
                </ul>
                <ul>
                    <li><Link to='/productos/insumos' className='nav-link'>Insumos</Link></li>
                </ul>
            </div>

            <div className='cartContainer'>
                <CartWidget/>
            </div>

        </nav>

    </>
  )
}

export default Navbar