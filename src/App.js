import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route, MobileIcon } from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact components={Home} />
      </Switch>
    </Router>
  );
}

export default App;
