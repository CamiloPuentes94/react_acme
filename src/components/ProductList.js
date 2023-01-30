import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import '../styles/ProductList.css'
import mouse_g502 from '../assets/imagenes/mouse_g502.jpg'
import camara_c920s from '../assets/imagenes/camara_c920s.jpg'
import void_rgb from '../assets/imagenes/void_rgb.jpg'
import diadema_g_pro from '../assets/imagenes/diadema_g_pro.jpg'
import silla_gamer from '../assets/imagenes/silla_gamer.jpeg'
import g513_carbon from '../assets/imagenes/g513_carbon.jpeg'
import monitor_asus from '../assets/imagenes/monitor_asus.jpeg'
import procesador from '../assets/imagenes/procesador.jpg'
import g915_tkl from '../assets/imagenes/g915_tkl.jpeg'


const ProductList = () => {
    const pedidos = [
        {
            ID: 100,
            nombre: 'Mouse G502 Hero',
            date: '2022-09-13 14:00',
            estado: 'RECIBIDO',
            comentario: 'Mouse LOL Edition Logitech',
            imagen: mouse_g502,
        },
        {
            ID: 101,
            nombre: 'Camara Web c920s',
            date: '2023-01-02 09:00',
            estado: 'EN CURSO',
            comentario: 'Camara marca logitech full hd 1080p/30fps',
            imagen: camara_c920s,
        },
        {
            ID: 302,
            nombre: 'Diadema Wireless void rgb',
            date: '2022-10-19 17:00',
            estado: 'EN CURSO',
            comentario: 'Diadema corsair void rgb elite wireless',
            imagen: void_rgb,
        },
        {
            ID: 509,
            nombre: 'Diadema g pro gaming',
            date: '2022-08-22 07:00',
            estado: 'ENTREGADO',
            comentario: 'Diadema marca logitech alambrico plug 3.5mm ',
            imagen: diadema_g_pro,
        },
        {
            ID: 658,
            nombre: 'Silla gamer negra',
            date: '2023-01-19 16:00',
            estado: 'RECIBIDO',
            comentario: 'silla marca power group referencia ZK-202',
            imagen: silla_gamer,
        },
        {
            ID: 968,
            nombre: 'Teclado g513',
            date: '2022-11-26 18:00',
            estado: 'CONFIRMADO',
            comentario: 'marca logitech, mechanical gaming',
            imagen: g513_carbon,
        },
        {
            ID: 1002,
            nombre: 'Monitor gamer asus',
            date: '2023-01-30 06:00',
            estado: 'EN CURSO',
            comentario: 'Monitor asus VG27H1B gamer',
            imagen: monitor_asus,
        },
        {
            ID: 1016,
            nombre: 'Procesador ryzen 5 5700g',
            date: '2022-12-16 08:00',
            estado: 'CONFIRMADO',
            comentario: 'Procesador con 8 nucleos y 4.6GHZ de frecuencia con grafica integrada',
            imagen: procesador,
        },
        {
            ID: 1265,
            nombre: 'Teclado g915 tkl',
            date: '2023-01-26 18:00',
            estado: 'EN CURSO',
            comentario: 'Teclado gaming marca logitech',
            imagen: g915_tkl,
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
            {pedidos.map(({ ID, nombre, date, estado, comentario, imagen }) => (
                <ul className="product-list" key={ID}>
                    <Link to={`/pedido/${ID}`} className='product-link'>
                        <Card
                            className="card"
                            ID={ID}
                            nombre={nombre}
                            date={date}
                            estado={estado}
                            comentario={comentario}
                            imagen={imagen}
                        ></Card>
                    </Link>
                </ul>
            ))}
        </div>
    )
}

export default ProductList
