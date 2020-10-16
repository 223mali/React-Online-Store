import React from 'react';
import Signin from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import './signin-signup.styles.scss';



const SigninSignup = () =>{
    return (
        <div className='sign-in-sign-out'>
            <Signin />

            <SignUp />
            
        </div>
    )
}


export default SigninSignup;