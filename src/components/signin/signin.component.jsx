import React from 'react';
import './signin.styles.scss'

class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password: ''
        }
    }

    handleSubmit = event=>{
        event.preventDefault()
        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I Already have an account?</h2>
                <span>Signin with Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <input 
                    name='email' 
                    type="email" 
                    value={this.state.email}
                    onChange={this.handleChange}/>
                    <label>Email</label>
                    
                    <input 
                    name='password' 
                    type="password" 
                    value={this.state.password}
                    onChange={this.handleChange}/>
                    <label>Password</label>

                    <input type="submit" value='Submit'/>
                </form>
            </div>
        )
    }
}

export default Signin