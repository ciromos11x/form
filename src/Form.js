// client/src/Form.js

import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (data) => {
    try {
      const response = await fetch('/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Errore durante la richiesta al server');
      }
  
      const result = await response.json();
      console.log(result); // Verifica la risposta del server
  
      // Altri passaggi di gestione della risposta
    } catch (error) {
      console.error('Errore durante l\'invio dei dati del form:', error);
    }
  };

  return (
    <div>
      <h1>Modulo di Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
};

export default Form;
