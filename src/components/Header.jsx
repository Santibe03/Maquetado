import React from 'react'
import imagenes from "./../assets/imagenes/imagenes.png"
import "./../Styles/Header.css"

export const Header = () => {
  return (
    <header>
    <div className="top">
      <img src={imagenes} alt="logo" className="logo" />
      <h1>INVENTORYIND AND COUNING</h1>
      <div className="una">
        <input type="text" placeholder="Buscar..." />
        <button>🔍</button>
      </div>

      <div className="iconos">
        <span>👤 Mi cuenta</span>
        <span>🛒 Añadir al carrito</span>
      </div>
    </div>
    <nav>
      <a href="#">Administrador</a>
      <a href="#">Cliente</a>
      <a href="#">Empleados</a>
    </nav>
  </header>
  )
}

export default Header


