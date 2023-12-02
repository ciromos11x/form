// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware per il parsing del corpo delle richieste
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint per la home
app.get('https://form-delta-seven.vercel.app', (req, res) => {
  res.send('Benvenuto nella home!');
});

// Endpoint per il form
app.get('https://form-delta-seven.vercel.app/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Endpoint per gestire i dati del form
app.post('/form', (req, res) => {
  const formData = req.body;
  // Puoi fare qualcosa con i dati del form qui
  console.log(formData);
  res.send('Dati del form ricevuti con successo!');
});

// Configurazione della directory "build" di React
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
