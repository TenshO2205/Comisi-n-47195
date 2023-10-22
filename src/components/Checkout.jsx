import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/data'

const Checkout = () => {

    const [numpedido, setNumpedido] = useState("")

    const { carrito, totalCompra, vaciarCarrito } = useContext(CartContext)

    const { register, handleSubmit } = useForm()

    const Comprar = (datos) => {
        const pedido = {
            cliente: datos,
            productos: carrito,
            total: totalCompra()
        }
        console.log(pedido)

        const referenciaPedido = collection(db, "pedidos")

        addDoc(referenciaPedido, pedido)
        .then((doc) =>{
            setNumpedido(doc.id)
            vaciarCarrito()
        })
    }
    if(numpedido){
        return(
            <div className='container-checkout'>
                <h2>Muchas gracias por tu compra!</h2>
                <p>Tu numero de pedido es: {numpedido}</p>
            </div>
        )
    }


  return (
    <div className='contact-container'>
    <h2>Finaliza tu compra</h2>
    <form className='form-contact' onSubmit={handleSubmit(Comprar)}>
        <input type="text" placeholder='Indique su nombre' className='input-contact' {...register("nombre")}/>
        <input type="email" placeholder='Indique su email' className='input-contact' {...register("email")}/>
        <input type="number" placeholder='Indique su telefono' className='input-contact' {...register("telefono")}/>
        <button type='submit' className='btn-contact'>Comprar</button>
    </form>
</div>
  )
}

export default Checkout