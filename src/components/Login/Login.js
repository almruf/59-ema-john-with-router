import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    const handleSubmit=(event)=>{
            event.preventDefault()
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            
            signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from,{replace:true});
            })
            .catch(error => console.error(error)); 
    }
    return (
       
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit} className='form' action="">
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