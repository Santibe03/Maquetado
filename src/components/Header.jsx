import React from 'react'
import proyecto from "./../assets/imagenes/proyect.png"
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
        <a href="/cuenta">👤 Iniciar sesión </a>
        <a href="/Registro">📝 Registrarme </a>
        <a href="/carrito">🛒 Añadir al carrito </a>

      </div>
    </div>
    <nav>
      <a href="/administrador">Administrador</a>
      <a href="/cliente">Cliente</a>
      <a href="/empleados">Empleados</a>
    </nav>
  </header>
  )
}

export default Header


