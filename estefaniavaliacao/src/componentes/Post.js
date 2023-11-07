import React from 'react'

const Post = ({titulo, imagem, descricao, categoria}) => {
    return (
        <div className="body">
            <h2 className="titulo"> {titulo} </h2>
            <img src={imagem} /> 
            <p className="descricao"> {descricao} </p>
            <p className="categoria"> {categoria} </p>

        </div>
        
    )
}

export default  Post