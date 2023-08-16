// App.js
import React, { useState } from 'react';
import Formulario from './Formulario';
import Card from './Card';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <h1>Elige tu color Favorito</h1>
      <Formulario onSubmit={handleFormSubmit} />
      {formData && <Card {...formData} />}
    </div>
  );
};

export default App;
