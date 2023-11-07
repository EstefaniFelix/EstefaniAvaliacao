import React from 'react'

const Comentario = ({ imagemfoto, nome, comentario }) => {
    return (
        <div className="body">
            <h2 className="nome"> {nome}  </h2>
            <img src={imagemfoto} className='img' />
            <p className="comentario"> {comentario}</p>
        </div>
    )
}

export default Comentario