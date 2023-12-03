import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form'; // Importa il componente Form
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/form' element= {<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
