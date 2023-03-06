import React, { useEffect, useState} from 'react'
import './ApiEcommerce.css'
import { Modal } from './Modal'


export const ApiEcommerce = ( ) => {
  const [ product, setProduct ]=useState(false)//true
  const [ api, setApi ]=useState({})

  useEffect(()=>{ fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{ console.log(json)

    setApi(json)
    setProduct(true)
    })
  }, [])

  /* Al apretar el boton comprar, quiero que haga esto: */
  const botonComprar = (id) => {
    const filtrados = api.filter(elemento => elemento.id === id)
    const lista = [ ]
    filtrados.forEach( mostrarArray => {
      lista.push(mostrarArray)
    });
    console.log(lista)
  }

  const botonEliminar = () => { console.log('Funciona el boton eliminar')} 

  return (<>
  <Modal verProductos={botonComprar}/>

  {product ? api.map((ropa)=>{return <div className='container'>
    
    {/* Carta  */}
    <ul key={ropa.id} className='carta'>
      <div className='carta-interior'>

        <li><img src={`${ropa.image}`} alt='ropa' className='api-img'/></li>
    
        <div className='Descripcion-producto'>
          <li>Categoria: {`${ropa.category}`}</li>
          <li>Precio: {`${ropa.price}`}</li>
          <li>Nombre: {`${ropa.title}`}</li>
          <div className='contenedor-boton'>
          
          {/* botones */}
          <button className='boton-carta' onClick={()=>botonComprar(ropa.id)}>Comprar</button>
          <button className='boton-carta' onClick={botonEliminar}>Eliminar</button>
          </div>
        </div>
      </div>
      </ul> 
    </div>}) : 'Cargando'}
    </>)
}