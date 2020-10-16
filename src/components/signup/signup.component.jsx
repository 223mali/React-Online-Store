import React from 'react';
import FormInput from '../form-input/form-input.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.util'
import CustomButton from '../custom-button/custom-button.component'

import './signup.styles.scss'

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

     handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        if( password !== confirmPassword){
            alert('password dont match')
        }
        
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            console.log(user)
            await createUserProfileDocument(user, displayName)
            console.log('displayName:', {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(e){
            console.log(e)
        }


    }

    handleChange = (event)=>{
        const {name, value} = event.target;

        this.setState({[name]: value})
    }



    render(){
        const {displayName, email, password, confirmPassword} = this.state

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span className=''>Signup with your email and password</span>

                <form 
                className='sign-up-form'
                onSubmit={this.handleSubmit}>
                    <FormInput 
                    type='text'
                    value={displayName}
                    name='displayName'
                    label='Display Name'
                    onChange={this.handleChange}
                    required />

<FormInput 
                    type='email'
                    value={email}
                    name='email'
                    label='Email'
                    onChange={this.handleChange}
                    required />

<FormInput 
                    type='password'
                    value={password}
                    name='password'
                    label='Password'
                    onChange={this.handleChange}
                    required />

<FormInput 
                    type='password'
                    value={confirmPassword}
                    name='confirmPassword'
                    label='Confirm your password'
                    onChange={this.handleChange}
                    required />

                    <CustomButton type='submit'>Sign Up</CustomButton>


                </form>

            </div>
        )
    }
}

export default SignUp