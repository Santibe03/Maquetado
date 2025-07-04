import React from 'react';

const ConfirmarPedido = () => {
  return (
    <div>
      <h2>Formulario de Confirmación de Pedido</h2>
      <form>
        <label>ID del pedido:</label>
        <input type="text" placeholder="Ingrese ID" />

        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
};

export default ConfirmarPedido;
