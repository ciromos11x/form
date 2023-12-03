import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form'; // Importa il componente Form
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/form' component = {Form} />
      </Switch>
    </Router>
  );
}

export default App;
