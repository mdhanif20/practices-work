import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from "react-router-dom";
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/Service">
                <Services></Services>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/contact">
                <Contact></Contact>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
