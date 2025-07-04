import React from 'react'
import "./../Styles/registro.css"
import Header from './Header'
import Footer from './Footer'

export const Registro = () => {
  return (
    <>
    
    <div>
  <div className="container">
    <h1>Registro</h1>
    <form>
      <select className="full-width">
        <option>Registrarme como</option>
        <option>Cliente</option>
        <option>Empleado</option>
        <option>Administrador</option>

      </select>

      <div className="row">
        <input type="text" placeholder="Primer nombre" required />
        <input type="text" placeholder="Segundo nombre (Opcional)" />
      </div>

      <div className="row">
        <input type="text" placeholder="Primer Apellido"  required/>
        <input type="text" placeholder="Segundo Apellido" required/>
      </div>

      <div className="row">
        <select>
          <option>Tipo de documento</option>
            <option>Cédula de ciudadanía</option>
            <option>Cédula de extranjería</option>
            
        </select>
        <input type="text" placeholder="N° de documento" required/>
      </div>

      <input type="email" placeholder="Email" className="full-width"required/>
      <input type="password" placeholder="Contraseña" className="full-width"required/>
      <input type="tel" placeholder="Telefono" className="full-width"required/>

      <button type="submit">Registrarme</button>
    </form>
  </div>
</div>
    
    </>
  )
}
export default Registro
