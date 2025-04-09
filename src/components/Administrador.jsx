import React from 'react'
import Header from './Header'

export const Administrador = () => {
    return (
        <>
            <Header />
            <header className="br">
      <div className="lados">
        <img src="imagenes/logo.jpg" alt="Logo" className="logo" />
        <span className="title">Inventoyingd and counting</span>
      </div>

      <div className="navcentro">
        <div className="navcentro">
          <div className="menu-container">
            <button className="menu-button" onClick={toggleMenu}>
              Menú ▾
            </button>
            <div id="dropdown" className={`dropdown ${isMenuOpen ? '' : 'hidden'}`}>
              <a href="#">Agregar insumos</a>
              <a href="#">Eliminar insumos</a>
              <a href="#">Ver insumos</a>
              <a href="#">Crear cuentas</a>
              <a href="#">Administrar cuentas</a>
              <a href="#">Ver opiniones, quejas o reclamos</a>
              <a href="#">Desactivar cuentas</a>
              <a href="#">Revisar cuentas</a>
              <a href="#">Confirmar pedidos</a>
              <a href="#">Consultar pedidos</a>
              <a href="#">Confirmar reservas</a>
              <a href="#">Modificar contactos con la empresa</a>
              <a href="#">Modificar Ubicación</a>
            </div>
          </div>
        </div>
      </div>
    </header>

            <Footer/>
        </>
    )
}

export default Administrador