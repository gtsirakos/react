import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

class App extends Component {
render() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/contact" component = {Contact}/>
            <Route exact path="/" component = {Home} />
        </Switch>
      </BrowserRouter>
        
    </div>
  );
}
}

export default App;
