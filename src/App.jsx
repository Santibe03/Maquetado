import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './main.jsx'; // Importa tu componente Main que contiene las rutas
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Main /> {/* Aquí se renderizarán tus rutas */}
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;







