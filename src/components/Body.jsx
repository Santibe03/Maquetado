import React from 'react'
import Header from "./Header"
import "./../Styles/header.css"

export const Body = () => {
  return (
    <>
      <Header/>
      <main>
        <section className="productos">
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
          <div className="productos2">
            <div className="imagenproducto"></div>
            <h3>Categoría</h3>
            <p>Nombre del producto</p>
            <span className="valor">$$$</span>
          </div>
        </section>
      </main>
    </>
  )
}
export default Body

