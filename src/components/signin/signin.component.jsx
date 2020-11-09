import React from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email,password} = event.target;
    
    try{
      await auth.signInWithEmailAndPassword(email.value,password.value)
      this.setState({ email: "", password: "" });
    }catch(e){
      console.error(e);
    }

    
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already have an account?</h2>
        <span>Signin with Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
          />

          <div className="buttons">
            <CustomButton type="submit" value="Submit">
              SIGN IN
            </CustomButton>
            <CustomButton
              value="Submit"
              onClick={signInWithGoogle}
              isGoogleSignin
            >
              SIGN IN WITH GOOLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
