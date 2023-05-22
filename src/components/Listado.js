import React from 'react'

const Listado = () => {
  return (
    <>
        <article className="peli-item">
                <h3 className="title">Titulo</h3>
                <p className="description">Descripcion</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
        </article>    
    </>
  )
}

export default Listado