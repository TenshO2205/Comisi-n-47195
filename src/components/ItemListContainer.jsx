import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/data'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const categoria = useParams().categoria

    useEffect(() => {

      const productosCollection = collection(db, "productos")

      const q = categoria ?  query(productosCollection, where("categoria", "==", categoria)) : productosCollection

      getDocs(q)
      .then((res) => {
        setProductos(
          res.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
        if (categoria) {
          setTitulo(categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase())
      } else {
        setTitulo('Productos');
      }
      })
    }, [categoria])
    
  return (
    <>
        <h2 className='titulo-h2'>{titulo}</h2>
    <div className='container-item'>
        <ItemList productos ={productos}/>
    </div>
    </>
  )
}

export default ItemListContainer