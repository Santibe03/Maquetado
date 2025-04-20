import React from 'react'
import proyecto from "./../assets/imagenes/logo.png"
import "./../Styles/header.css"

export const Header = () => {
  return (
    <header>
    <div className="top">
      <img src={proyecto} alt="logo" className="logo" />
      <a href='/home'>INVENTORING AND COUNTING</a>
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


