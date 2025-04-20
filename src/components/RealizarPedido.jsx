import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './../Styles/RealizarPedidoForm.css';

function RealizarPedidoForm() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/consultarpedido');
    };

    return (
        <div>
            <Header />
            <form className="pedido-form">
                <h2>Realizar Pedido</h2>
                <div className="form-group">
                    <label htmlFor="nombreProducto">Nombre del Producto:</label>
                    <input type="text" id="nombreProducto" name="nombreProducto" required />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidad">Cantidad:</label>
                    <input type="number" id="cantidad" name="cantidad" min="1" defaultValue="1" required />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción (Opcional):</label>
                    <textarea id="descripcion" name="descripcion" rows="4"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="metodoPago">Método de Pago:</label>
                    <select id="metodoPago" name="metodoPago">
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta_credito">Tarjeta de Crédito</option>
                        <option value="transferencia">Transferencia Bancaria</option>

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="direccionEnvio">Dirección de Envío:</label>
                    <textarea id="direccionEnvio" name="direccionEnvio" rows="3" required></textarea>
                </div>
                <button type="button" className="submit-button" onClick={handleSubmit}>Realizar Pedido</button>
            </form>
            <Footer />
        </div>
    );
}

export default RealizarPedidoForm;