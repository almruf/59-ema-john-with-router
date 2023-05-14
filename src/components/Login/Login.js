import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form className='form' action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required/>
                </div>
                <input type="submit" className="btn-submit" value="Login" />
                <p>new to Ema-John  <Link to='/signup'> create an account</Link></p>
            </form>
            
        </div>
    );
};

export default Login;