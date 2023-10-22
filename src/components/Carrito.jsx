import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { carrito, totalCompra, vaciarCarrito } = useContext(CartContext)

    const vaciarCart = () =>{
        vaciarCarrito()
    }
  return (
    <>
        {
            carrito.map((prod) => (
                <div className='shopping-container' key={prod.id}>
                    <div className="lado-izquierdo">
                        <img src={prod.image} alt={prod.title}/>
                        <div className="info-cart">
                            <div className="products-cart">
                                <h3>Productos</h3>
                                <span>{prod.title}</span>
                            </div>
                            <div className="price-cart">
                                <h3>Precio</h3>
                                <span>$ {prod.price}</span>
                            </div>
                            <div className="month-cart">
                                <h3>Cantidad</h3>
                                <span>{prod.count}</span>
                            </div>
                            <div className="total-cart">
                                <h3>Total</h3>
                                <span>$ {prod.price * prod.count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        {
            carrito.length > 0 ? <div className="lado-derecho">
            <div className="total">
                <h4>Total estimado</h4>
                <p>$ {totalCompra()}</p>
            </div>
            <div className="btn-compra">
                <Link to="/checkout"><button>Finalizar Compra</button></Link>
                <button onClick={vaciarCart}>Vaciar Carrito</button>
            </div>
                </div> :
                <h2 className='carrito-empty'>Carrito Vacio</h2>
        }
    </>
  )
}

export default Carrito