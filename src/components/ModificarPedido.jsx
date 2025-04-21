import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../Styles/ModificarPedido.css'; // Archivo de estilos opcional
import Header from './Header';
import Footer from './Footer';

function ModificarPedido() {
    const location = useLocation();
    const navigate = useNavigate();
    const pedidoInicial = location.state?.pedido;

    // Estado para almacenar los valores del formulario
    const [nombreProducto, setNombreProducto] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [descripcion, setDescripcion] = useState('');
    const [metodoPago, setMetodoPago] = useState('');
    const [direccionEnvio, setDireccionEnvio] = useState('');

    useEffect(() => {
        // Carga los datos del pedido inicial en el estado del formulario
        if (pedidoInicial) {
            setNombreProducto(pedidoInicial.nombreProducto || '');
            setCantidad(pedidoInicial.cantidad || 1);
            setDescripcion(pedidoInicial.descripcion || '');
            setMetodoPago(pedidoInicial.metodoPago || '');
            setDireccionEnvio(pedidoInicial.direccionEnvio || '');
        }
    }, [pedidoInicial]);

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
        // Aquí puedes realizar la lógica para enviar los datos modificados del pedido
        const pedidoModificado = {
            nombreProducto,
            cantidad,
            descripcion,
            metodoPago,
            direccionEnvio,
            // ... otros campos que puedas tener ...
        };
        console.log('Pedido Modificado:', pedidoModificado);
        // Después de guardar los cambios, podrías redirigir al usuario
        navigate('/consultarpedido', { state: { pedido: pedidoModificado } });
    };

    const handleCancelar = () => {
        navigate('/consultarpedido', { state: { pedido: pedidoInicial } });
    };

    return (
        <>
        
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
                        {/* Puedes añadir más opciones de pago */}
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
        
        </>
    );
}

export default ModificarPedido;