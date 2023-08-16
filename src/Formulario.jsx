// Formulario.js
import React, { useState } from 'react';

const Formulario = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [color, setDescripcion] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones con el metodo trim() para eliminar espacios en blanco en ambos extremos del string
    if (nombre.trim().length < 3 || nombre.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (color.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setError('');

    // Llamar al onSubmit con la información ingresada
    onSubmit({ nombre, color });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} placeholder="Ingresa tu nombre" onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Color:
          <input type="text" value={color} placeholder="Color formato HEX" onChange={(e) => setDescripcion(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Formulario;
