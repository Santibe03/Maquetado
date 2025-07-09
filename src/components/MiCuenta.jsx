import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './../Styles/login.css';
import Header from './Header';
import Footer from './Footer';

const IniciarSesion = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultado = login(nombre, contraseña);

    if (resultado.exito) {
      if (resultado.rol === 'Administrador') navigate('/administrador');
      else if (resultado.rol === 'Empleado') navigate('/empleados');
      else if (resultado.rol === 'Cliente') navigate('/cliente');
      else navigate('/'); // Redirigir a la página principal si el rol no coincide
    } else {
      setError(resultado.mensaje);
    }
  };

  return (
    <>
    <Header />
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre de usuario:</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            id="contraseña"
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>

        <button type="submit">Ingresar</button>
        
      </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    <Footer />
    </>
  );
};

export default IniciarSesion;

