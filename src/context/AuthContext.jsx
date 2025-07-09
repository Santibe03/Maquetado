import React, { createContext, useContext, useState,  } from 'react';

const AuthContext = createContext();

const usuariosPredefinidos = [
  { nombre: 'Santibe03', contraseña: 'admin123', rol: 'Administrador' },
  { nombre: 'Areho', contraseña: 'empleado123', rol: 'Empleado' },
  { nombre: 'Mateo729', contraseña: 'cliente123', rol: 'Cliente' }
];

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(() => {
    const almacenado = localStorage.getItem('usuario');
    return almacenado ? JSON.parse(almacenado) : null;
  });

  const login = (nombre, contraseña) => {
    const usuarioValido = usuariosPredefinidos.find(
      (u) => u.nombre === nombre && u.contraseña === contraseña
    );

    if (usuarioValido) {
      setUsuario(usuarioValido);
      localStorage.setItem('usuario', JSON.stringify(usuarioValido));
      return { exito: true, rol: usuarioValido.rol };
    } else {
      return { exito: false, mensaje: 'Credenciales incorrectas' };
    }
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
