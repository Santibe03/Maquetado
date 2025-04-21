import React from 'react';
import './../Styles/PedidoDetalle.css'; // Archivo de estilos opcional


export const PedidoSencillo = () => {

    return (
        <>
    
        <div className="pedido-cuadrado">
            <h3>Detalles del Pedido</h3>
            <p><strong>Producto:</strong>######</p>
            <p><strong>Cantidad:</strong>###########</p>
            <p><strong>Descripción:</strong>##### </p>
            <p><strong>Método de Pago:</strong>##### </p>
            <p><strong>Dirección:</strong>##### #####</p>
            {/* Puedes agregar más detalles aquí */}
        </div>
 
        </>
    );
}

export default PedidoSencillo;