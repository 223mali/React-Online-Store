import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route} from 'react-router-dom';
import HatsPage from './pages/hats/hats-page.component'
import ShopPage from './pages/shop/shoppage.component'

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <HomePage />
      </Switch>
    </div>
  );
}

export default App;
