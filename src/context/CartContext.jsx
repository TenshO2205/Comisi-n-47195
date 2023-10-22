import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ( {children} ) =>{
    const [carrito, setCarrito] = useState(carritoInicial)

    const agregarCarrito = (item, count) =>{
      const agregarItem = {...item, count}
      const nuevoCarrito = [...carrito]
      const carritoAgregado = nuevoCarrito.find((producto) => producto.id === agregarItem.id)
  
      if(carritoAgregado){
        carritoAgregado.count += count
      } else{
        nuevoCarrito.push(agregarItem)
      }
      setCarrito(nuevoCarrito)
    }
  
    const cantidadCarrito =  () =>{
      return carrito.reduce((acc, producto) => acc + producto.count, 0)
    }
  
    const totalCompra = () =>{
      return carrito.reduce((acc, prod) => acc + prod.price * prod.count, 0)
    }
  
    const vaciarCarrito = () =>{
      setCarrito([])
    }

    useEffect(() =>{
      localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
    <CartContext.Provider value={ {carrito, agregarCarrito, cantidadCarrito, totalCompra, vaciarCarrito} }>
        {children}
    </CartContext.Provider>
    )
}