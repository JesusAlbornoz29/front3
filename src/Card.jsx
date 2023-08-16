// Card
import React from 'react';

const Card = ({ nombre, color }) => {
  return (
    <div>
      <h2>Información ingresada:</h2>
      <p>Nombre: {nombre}</p>
      <p>Color: {color}</p>
    </div>
  );
};

export default Card;
