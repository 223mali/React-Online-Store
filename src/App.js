import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/header/header.component";
import SigninSignup from "./pages/signin-signup/signin-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }
  render() {
    console.log(this.state.user)


    return (
      <div>
        <Header currentUser={this.state.user} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninSignup} />

          <HomePage />
        </Switch>
      </div>
    );
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            user: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({user:null})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
}

export default App;
