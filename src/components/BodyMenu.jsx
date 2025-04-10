import React, { useState } from 'react';

const BodyMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div style={{ padding: '40px' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onClick={toggleMenu}
          style={{
            padding: '10px 16px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: '#f1f1f1',
            cursor: 'pointer',
          }}
        >
          Menú ▼
        </button>

        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: '110%',
              left: 0,
              width: '180px',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
              zIndex: 10,
            }}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {['Ver productos', 'Hacer pedidos', 'Hacer reservas', 'Cancelar reservas'].map(
                (item, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '10px 15px',
                      cursor: 'pointer',
                      borderBottom: index < 3 ? '1px solid #eee' : 'none',
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#f5f5f5')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyMenu;