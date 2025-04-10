import React from 'react'
import Header from './Header'
import Footer from './Footer'

export const MiCuenta = () => {
  const styles = {
    container: {
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    card: {
      textAlign: 'center',
      padding: '2rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: 'white',
      width: '100%',
      maxWidth: '400px',
    },
    input: {
      display: 'block',
      width: '100%',
      padding: '0.5rem',
      margin: '1rem 0',
      fontSize: '1rem',
    },
    button: {
      padding: '0.5rem 1.5rem',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    links: {
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.9rem',
    },
  }

  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.card}>
          <h1>INVENTORYIND AND COUNTING</h1>
          <h2>BIENVENIDO</h2>

          <input type="text" placeholder="Usuario" style={styles.input} />
          <input type="password" placeholder="Contraseña" style={styles.input} />

          <button style={styles.button}>Ingresar</button>

          <div style={styles.links}>

            <a href="#">¿Perdiste tu contraseña?</a>
            <a href="#">¿No tienes cuenta? ¡Regístrate!</a>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


export default MiCuenta

