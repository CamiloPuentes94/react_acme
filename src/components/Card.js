import React from 'react'
import '../styles/Card.css'

function Card({ ID, nombre, date, estado, comentario }) {
    return (
        <div className="card">
            <p>{ID}</p>
            <p>{nombre}</p>
            <p>{date.toLocaleString()}</p>
            <p className="estado">{estado}</p>
            <p className="comentario">{comentario}</p>
        </div>
    )
}

export default Card
