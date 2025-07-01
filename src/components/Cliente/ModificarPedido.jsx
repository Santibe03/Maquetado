import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePedido } from './../../context/PedidoContext';
import './../../Styles/Cliente/ModificarPedido.css';

function ModificarPedido() {
    const navigate = useNavigate();
    const { pedido, setPedido } = usePedido();

    const [nombreProducto, setNombreProducto] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [descripcion, setDescripcion] = useState('');
    const [metodoPago, setMetodoPago] = useState('');
    const [direccionEnvio, setDireccionEnvio] = useState('');

    useEffect(() => {
        if (pedido) {
            setNombreProducto(pedido.nombreProducto || '');
            setCantidad(pedido.cantidad || 1);
            setDescripcion(pedido.descripcion || '');
            setMetodoPago(pedido.metodoPago || '');
            setDireccionEnvio(pedido.direccionEnvio || '');
        }
    }, [pedido]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'nombreProducto':
                setNombreProducto(value);
                break;
            case 'cantidad':
                setCantidad(parseInt(value));
                break;
            case 'descripcion':
                setDescripcion(value);
                break;
            case 'metodoPago':
                setMetodoPago(value);
                break;
            case 'direccionEnvio':
                setDireccionEnvio(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const pedidoModificado = {
            nombreProducto,
            cantidad,
            descripcion,
            metodoPago,
            direccionEnvio
        };

        setPedido(pedidoModificado); // ACTUALIZAR el contexto global
        navigate('/consultarpedido'); // Redirigir
    };

    const handleCancelar = () => {
        navigate('/consultarpedido');
    };

    return (
        <div className="modificar-pedido-container">
            <h2>Modificar Pedido</h2>
            <form onSubmit={handleSubmit} className="modificar-pedido-form">
                <div className="form-group">
                    <label htmlFor="nombreProducto">Nombre del Producto:</label>
                    <input
                        type="text"
                        id="nombreProducto"
                        name="nombreProducto"
                        value={nombreProducto}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidad">Cantidad:</label>
                    <input
                        type="number"
                        id="cantidad"
                        name="cantidad"
                        min="1"
                        value={cantidad}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción (Opcional):</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        rows="4"
                        value={descripcion}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="metodoPago">Método de Pago:</label>
                    <select
                        id="metodoPago"
                        name="metodoPago"
                        value={metodoPago}
                        onChange={handleInputChange}
                    >
                        <option value="">Seleccionar método de pago</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta_credito">Tarjeta de Crédito</option>
                        <option value="transferencia">Transferencia Bancaria</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="direccionEnvio">Dirección de Envío:</label>
                    <textarea
                        id="direccionEnvio"
                        name="direccionEnvio"
                        rows="3"
                        value={direccionEnvio}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="guardar-cambios-button">Guardar Cambios</button>
                <button type="button" className="cancelar-button" onClick={handleCancelar}>Cancelar</button>
            </form>
        </div>
    );
}

export default ModificarPedido;
