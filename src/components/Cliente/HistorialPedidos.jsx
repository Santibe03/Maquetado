import React from 'react';
import './../../Styles/Cliente/HistorialPedidos.css';
import Header from '../Header';
import Footer from '../Footer';

function HistorialPedidos() {
    const historial = [
        { id: 1, producto: 'Laptop', cantidad: 1, fecha: '2025-04-10', estado: 'Entregado' },
        { id: 2, producto: 'Mouse Inalámbrico', cantidad: 2, fecha: '2025-04-11', estado: 'Entregado' },
        { id: 3, producto: 'Teclado Mecánico', cantidad: 1, fecha: '2025-04-12', estado: 'En tránsito' },
        { id: 4, producto: 'Monitor 27"', cantidad: 1, fecha: '2025-04-13', estado: 'Entregado' },
        { id: 5, producto: 'Audífonos Bluetooth', cantidad: 1, fecha: '2025-04-14', estado: 'Pendiente' },
        { id: 6, producto: 'Silla Ergonómica', cantidad: 1, fecha: '2025-04-15', estado: 'Entregado' },
        { id: 7, producto: 'Impresora Multifuncional', cantidad: 1, fecha: '2025-04-16', estado: 'En tránsito' },
        { id: 8, producto: 'Webcam HD', cantidad: 1, fecha: '2025-04-17', estado: 'Entregado' },
        { id: 9, producto: 'SSD 1TB', cantidad: 1, fecha: '2025-04-18', estado: 'Pendiente' },
        { id: 10, producto: 'Mesa de Escritorio', cantidad: 1, fecha: '2025-04-19', estado: 'Entregado' },
    ];

    return (
        <>
        
            <div className="historial-pedidos-container">
                <h2>Historial de Pedidos</h2>
                {historial.length === 0 ? (
                    <p>No hay pedidos en tu historial.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Fecha</th>
                                <th>Estado</th>
                                <th>Acciones</th> {/* Puedes agregar acciones como "Ver Detalles" */}
                            </tr>
                        </thead>
                        <tbody>
                            {historial.map((pedido) => (
                                <tr key={pedido.id}>
                                    <td>{pedido.id}</td>
                                    <td>{pedido.producto}</td>
                                    <td>{pedido.cantidad}</td>
                                    <td>{pedido.fecha}</td>
                                    <td>{pedido.estado}</td>
                                    <td>
                                        <button className="ver-detalles-button">Ver Detalles</button>
                                        {/* Puedes agregar más botones de acción aquí */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        
        </>
    );
}

export default HistorialPedidos;