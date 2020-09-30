import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shoppage.component'
import Header from './components/header/header.component'
import SigninSignup from "./pages/signin-signup/signin-signup.component";
import { auth } from "./firebase/firebase.util";


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      user: null
    }
  }
 render(){
  return (
    <div>
      <Header currentUser = {this.state.user} />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SigninSignup} />

      <HomePage />
      </Switch>
    </div>
  );
 }
 unsubscribeFromAuth = null
 componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
    this.setState({user:user})
    console.log(user)
  })  
 }

 componentWillUnmount(){
   this.unsubscribeFromAuth();  
 }

}

export default App;
