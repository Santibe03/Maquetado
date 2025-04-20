import React from 'react'
import Header from './Header'
import "./../Styles/Cliente.css"
import "./../Styles/admi.css" 
import Footer from './Footer' 

export const Cliente = () => {
  return (
    <>
    
    <Header />
    <div>
      <header className="br">
        <div className="lados">
          <img src="imagenes/logo.jpg" alt="Logo" className="logo" />
          <span className="title">Inventoring and counting</span>
        </div>

        <div className="navcentro">
          <span>Cliente 👤</span>
        </div>
      </header>
    </div>
      <h1>Cliente</h1>
      <p>Bienvenido a la sección de Cliente.</p>
      <p>Aquí podrás gestionar tus pedidos y consultar el estado de los mismos.</p>
      <p>Si tienes alguna duda, no dudes en ponerte en contacto con nosotros.</p>
      <p>¡Gracias por elegirnos!</p>
      <div className="section1">
        <img src="imagenes/logo.jpg" alt="Banner Principal" className="image" />
      </div>
      <Footer />
    </>

  )
}

export default Cliente
