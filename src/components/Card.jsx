import React from 'react'
import { Link } from 'react-router-dom'

const Card = ( {producto} ) => {
  return (
    <div className='card'>
        <img src={producto.image} alt={producto.title}/>
        <div className="card-details">
            <p className="text-tittle">{producto.title}</p>
            <p className="text-body">${producto.price}</p>
        </div>
        <Link to={`item/${producto.id}`}><button className="card-btn">Ver Mas</button></Link>
    </div>
  )
}

export default Card