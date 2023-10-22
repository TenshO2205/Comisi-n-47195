import React, { useContext } from 'react'
import { BsFillBagFill } from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {

  const {cantidadCarrito} = useContext(CartContext)
    return (
      <>
      <Link to="/carrito">
        <BsFillBagFill className='icon-carrito'/>
      </Link>
        <p className='globito'>{cantidadCarrito()}</p>
      </>
      )
}

export default CartWidget