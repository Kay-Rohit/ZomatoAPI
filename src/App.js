import React from 'react';
import './App.css';
import Location from './components/SearchComponent';
import RestaurantDeatail from './components/RestrauntDetailsComponent';
import Nav from './components/NavComponent'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Location}></Route>
          <Route path='/:id' component={RestaurantDeatail}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
