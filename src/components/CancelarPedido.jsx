import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../Styles/CancelarPedido.css'; // Archivo de estilos opcional
import Header from './Header';
import Footer from './Footer';

function CancelarPedido() {
    const location = useLocation();
    const navigate = useNavigate();
    const pedido = location.state?.pedido;
    const [confirmarCancelacion, setConfirmarCancelacion] = useState(false);

    const handleCancelar = () => {
        setConfirmarCancelacion(true);
    };

    const handleConfirmar = () => {
        // Aquí iría la lógica real para cancelar el pedido
        console.log('Pedido Cancelado:', pedido);
        // Después de cancelar, podrías redirigir al usuario
        navigate('/pedidocancelado', { state: { mensaje: 'Tu pedido ha sido cancelado exitosamente.' } });
    };

    const handleRechazarCancelacion = () => {
        setConfirmarCancelacion(false);
    };

    const handleVolver = () => {
        navigate('/consultarpedido');
    };


    return (
        <>
    
            <div className="cancelar-pedido-container">
                <h2>Cancelar Pedido</h2>
                <p>¿Estás seguro de que deseas cancelar el siguiente pedido?</p>
                <div className="detalle-cancelar">
                    <p><strong>Producto:###########</strong> </p>
                    <p><strong>Cantidad:######</strong> </p>
                    <p><strong>Descripción:######</strong> </p>
                    <p><strong>Método de Pago:######</strong> </p>
                    <p><strong>Dirección:######</strong> </p>
                    {/* Muestra aquí más detalles relevantes del pedido */}
                </div>

                {!confirmarCancelacion ? (
                    <button className="cancelar-button" onClick={handleCancelar}>Cancelar Pedido</button>
                ) : (
                    <div className="confirmacion-cancelar">
                        <p>Esta acción no se puede deshacer. ¿Confirmas la cancelación?</p>
                        <button className="confirmar-button" onClick={handleConfirmar}>Sí, Cancelar</button>
                        <button className="rechazar-button" onClick={handleRechazarCancelacion}>No, Volver</button>
                    </div>
                )}

                <button className="volver-button" onClick={handleVolver}>Volver al Pedido</button>
            </div>
    
        </>
    );
}

export default CancelarPedido;