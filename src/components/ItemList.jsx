import React from 'react'
import Card from './Card'

const ItemList = ( {productos} ) => {
  return (
    <div className='box-cards'>
        {productos.map((product) => (
            <Card producto = {product} key={product.id}/>
        ))}
    </div>
  )
}

export default ItemList