import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

const ItemDetail = ( {item} ) => {

  const [count, setCount] = useState(1)

  const restar = () => {
      count > 1 && setCount(count - 1)
  }

  const sumar = () => {
      count < item.stock && setCount(count + 1)
  }

  const {carrito, agregarCarrito} = useContext(CartContext)
  console.log(carrito)

  return (
    <div className="product-details">
    <img src={item.image} alt={item.title} className="product-image" />
    <div className="product-info">
      <h2 className="product-name">{item.title}</h2>
      <p className="product-description">{item.description}</p>
      <p className="product-price">Precio: {item.price}</p>
      <b>{`Stock disponible: ${item.stock}`}</b>
      <ItemCount cantidad={count} sumar={sumar} restar={restar} carrito={() => {agregarCarrito(item,count)}}/>
    </div>
  </div>
  )
}

export default ItemDetail