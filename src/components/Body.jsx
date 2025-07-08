import React from 'react'
import Header from "./Header"
import '../styles/Home.css'; // ¡Ruta actualizada para apuntar a la carpeta styles!
import logo from '../assets/imagenes/logo.png'; // Asegúrate de que esta ruta a tu logo sea correcta
import Footer from './Footer'

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logo} alt="INVENTORING AND COUNTING Logo" className="home-logo" />
        <h1>Bienvenido a INVENTORING AND COUNTING</h1>
        <p>Tu solución integral para la gestión de inventario y pedidos.</p>
      </header>
      <main className="home-main">
        <section className="home-about">
          <h2>Sobre Nosotros</h2>
          <p>
            INVENTORING AND COUNTING es una plataforma robusta y fácil de usar diseñada para optimizar
            la gestión de tus recursos y el flujo de trabajo de pedidos. Nuestra misión es simplificar
            las operaciones diarias de inventario y asegurar un seguimiento preciso de cada etapa de tus pedidos.
          </p>
          <p>
            Ya seas una pequeña empresa o una gran corporación, nuestra herramienta se adapta a tus necesidades,
            proporcionando control total y visibilidad sobre tus insumos y transacciones.
          </p>
        </section>
        <section className="home-features">
          <h2>Características Principales</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <h3>Gestión de Insumos</h3>
              <p>Controla el stock, registra entradas y salidas, y mantén tu inventario actualizado en tiempo real.</p>
            </div>
            <div className="feature-item">
              <h3>Administración de Pedidos</h3>
              <p>Crea, consulta, modifica y cancela pedidos de manera eficiente y sin errores.</p>
            </div>
            <div className="feature-item">
              <h3>Roles de Usuario Diferenciados</h3>
              <p>Acceso personalizado para administradores, empleados y clientes, cada uno con funcionalidades específicas.</p>
            </div>
            <div className="feature-item">
              <h3>Historial Completo</h3>
              <p>Accede a un registro detallado de todas las operaciones y el historial de pedidos para una mejor toma de decisiones.</p>
            </div>
             <div className="feature-item">
              <h3>Comunicación Eficaz</h3>
              <p>Facilitamos la interacción entre los diferentes roles para una colaboración fluida.</p>
            </div>
          </div>
        </section>
        <section className="home-cta">
          <h2>¡Comienza a Optimizar tu Negocio Hoy!</h2>
          <p>
            Explora cómo INVENTORING AND COUNTING puede transformar la forma en que gestionas tu inventario y tus pedidos.
            Regístrate o inicia sesión para descubrir todas nuestras funcionalidades.
          </p>
          {/* Aquí podrías añadir botones o enlaces a las páginas de registro/inicio de sesión */}
          {/* <button className="btn-primary" onClick={() => navigate('/registro')}>Regístrate</button>
          <button className="btn-secondary" onClick={() => navigate('/mi-cuenta')}>Iniciar Sesión</button> */}
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} INVENTORING AND COUNTING. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;

