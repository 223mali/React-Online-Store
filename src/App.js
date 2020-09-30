import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component'
import Header from './components/header/header.component'
import SigninSignup from "./pages/signin-signup/signin-signup.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SigninSignup} />

      <HomePage />
      </Switch>
    </div>
  );
}

export default App;
