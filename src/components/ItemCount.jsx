import React, { useState } from 'react'

const ItemCount = ( {cantidad, sumar, restar, carrito} ) => {
  return (
    <>
    <div className='itemCount'>
        <button className='item-count-button' onClick={restar}>-</button>
        <p>{cantidad}</p>
        <button className='item-count-button' onClick={sumar}>+</button>
    </div>
    <button className="add-to-cart-button" onClick={carrito}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount