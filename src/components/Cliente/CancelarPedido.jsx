import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePedido } from './../../context/PedidoContext';
import './../../Styles/Cliente/CancelarPedido.css';

function CancelarPedido() {
    const navigate = useNavigate();
    const { pedido, setPedido } = usePedido();
    const [confirmarCancelacion, setConfirmarCancelacion] = useState(false);

    const handleCancelar = () => {
        setConfirmarCancelacion(true);
    };

    const handleConfirmar = () => {
        // Eliminar el pedido del contexto y localStorage
        setPedido(null);
        localStorage.removeItem('pedido');

        console.log('Pedido cancelado');
        navigate('/pedidocancelado', {
            state: { mensaje: 'Tu pedido ha sido cancelado exitosamente.' }
        });
    };

    const handleRechazarCancelacion = () => {
        setConfirmarCancelacion(false);
    };

    const handleVolver = () => {
        navigate('/consultarpedido');
    };

    if (!pedido) {
        return (
            <div className="cancelar-pedido-container">
                <h2>No hay pedido para cancelar.</h2>
                <button className="volver-button" onClick={() => navigate('/realizarpedido')}>
                    Ir a Realizar Pedido
                </button>
            </div>
        );
    }

    return (
        <div className="cancelar-pedido-container">
            <h2>Cancelar Pedido</h2>
            <p>¿Estás seguro de que deseas cancelar el siguiente pedido?</p>
            <div className="detalle-cancelar">
                <p><strong>Producto:</strong> {pedido.nombreProducto}</p>
                <p><strong>Cantidad:</strong> {pedido.cantidad}</p>
                <p><strong>Descripción:</strong> {pedido.descripcion}</p>
                <p><strong>Método de Pago:</strong> {pedido.metodoPago}</p>
                <p><strong>Dirección:</strong> {pedido.direccionEnvio}</p>
            </div>

            {!confirmarCancelacion ? (
                <button className="cancelar-button" onClick={handleCancelar}>
                    Cancelar Pedido
                </button>
            ) : (
                <div className="confirmacion-cancelar">
                    <p>Esta acción no se puede deshacer. ¿Confirmas la cancelación?</p>
                    <button className="confirmar-button" onClick={handleConfirmar}>
                        Sí, Cancelar
                    </button>
                    <button className="rechazar-button" onClick={handleRechazarCancelacion}>
                        No, Volver
                    </button>
                </div>
            )}

            <button className="volver-button" onClick={handleVolver}>
                Volver al Pedido
            </button>
        </div>
    );
}

export default CancelarPedido;
