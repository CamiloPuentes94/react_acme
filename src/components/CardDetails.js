import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Layout from './Layout'
import '../styles/CardDetails.css'
import avocado from '../assets/imagenes/avocados.jpg'

function CardDetails() {
    const [pedidos, setPedidos] = useState([])
    const { id } = useParams()
    const getPedido = pedidos.filter((pedido) => pedido.ID === Number(id))

    useEffect(() => {
        setPedidos(JSON.parse(localStorage.getItem('pedidos')))
    }, [])

    return (
        <Layout>
            <div className='cardDetails-card'>
                <h2>{getPedido[0]?.nombre} {getPedido[0]?.ID}</h2>
                <img src={getPedido[0]?.imagen} alt='imagen pedido' />
                <p> FECHA PEDIDO : {new Date(getPedido[0]?.date).toLocaleString()}</p>
                <p>ESTADO : {getPedido[0]?.estado}</p>
                <p>COMENTARIO : {getPedido[0]?.comentario}</p>

            </div>
        </Layout>

    )
}

export default CardDetails