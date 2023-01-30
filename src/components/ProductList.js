import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import '../styles/ProductList.css'

const ProductList = () => {
    const pedidos = [
        {
            ID: 123,
            nombre: 'producto',
            date: new Date(),
            estado: 'RECIBIDO',
            comentario: 'asdkjasd',
        },
        {
            ID: 1223,
            nombre: 'producto',
            date: new Date(),
            estado: 'CONFIRMADO',
            comentario: 'asdkjassaddasdasdadasdd',
        },
        {
            ID: 1233,
            nombre: 'producto',
            date: new Date(),
            estado: 'EN CURSO',
            comentario: 'asdkjasdasdkjasdasdkjasdasdkjasdasdkjasd',
        },
        {
            ID: 1234,
            nombre: 'producto',
            date: new Date(),
            estado: 'ENTREGADO',
            comentario: 'asdkjasd',
        },
        {
            ID: 1235,
            nombre: 'producto',
            date: new Date(),
            estado: 'RECIBIDO',
            comentario: 'asdkjasd',
        },
        {
            ID: 1236,
            nombre: 'producto',
            date: new Date(),
            estado: 'EN CURSO',
            comentario: 'asdkjasd',
        },
    ]
    useEffect(() => {
        localStorage.setItem('pedidos', JSON.stringify(pedidos))
    }, [])

    if (pedidos.length === 0) {
        return <h1>No hay pedidos para mostrar</h1>
    }
    return (
        <div className='product-container'>
            {pedidos.map(({ ID, nombre, date, estado, comentario }) => (
                <ul className="product-list" key={ID}>
                    <Link to={`/pedido/${ID}`} className='product-link'>
                        <Card
                            className="card"
                            ID={ID}
                            nombre={nombre}
                            date={date}
                            estado={estado}
                            comentario={comentario}
                        ></Card>
                    </Link>
                </ul>
            ))}
        </div>
    )
}

export default ProductList
