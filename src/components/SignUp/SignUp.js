import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
const SignUp = () => {
    const[error, setError] = useState(null);
    const {createUser} = useContext(AuthContext)
    
    const handleSubmit =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
                                                      
        if(password.length < 6){
            setError('password not less then 6 character');
            return;
        }
        if(password !== confirm){
            setError('password did not mach');
            return;
        }

      createUser(email, password)
      .then(result =>{
        const user =result.user;
        console.log(user);
        form.reset();
      })
      .catch(error => console.error(error)); 
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='form' action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' required/>
                </div>
                <p className='text-error'>{error}</p>
                <input type="submit" className="btn-submit" value="Sign Up" />
                <p>Already have an account <Link to='/login'>Login</Link></p>
            </form>
            
        </div>
    );
};

export default SignUp;
