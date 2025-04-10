import React from 'react'
import imagenes from "./../assets/imagenes/imagenes.png"
import "./../Styles/Header.css"

export const Header = () => {
  return (
    <header>
    <div className="top">
      <img src={imagenes} alt="logo" className="logo" />
      <a href="/home">INVENTORYIND AND COUNING</a>
      <div className="una">
        <input type="text" placeholder="Buscar..." />
        <button>🔍</button>
      </div>

      <div className="iconos">
        <a href="/cuenta">👤 Iniciar sesión </a>
        <a href="/Registro">📝 Registrarme </a>
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


