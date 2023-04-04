import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../images/Buckit-Logo-TSP.png';
import LoginValidation from './LoginValidation';


function Login() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [loginSuccess, setLoginSuccess] = useState(false);

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(LoginValidation(values))

        axios.post('http://localhost:3001/api/users/login', values)
        .then((res) => {
            localStorage.setItem('user_id', res.data.user_id);
            localStorage.setItem('jwtToken', res.data.jwtToken);
            setLoginSuccess(true);
            console.log('Login success');
        })
        .catch((err) => {
            console.log(err.response.data);
            setErrors({
                email: err.response.data.email,
                password: err.response.data.password,
            });
        });
    };

    useEffect(() => {
        if (loginSuccess) {
            const user_id = localStorage.getItem('user_id');
            const jwtToken = localStorage.getItem('jwtToken');
            
            navigate(`/subscriptions/${user_id}/${jwtToken}`);
            
        }
    }, [loginSuccess]);

  return (
    <div className='d-flex justify-content-center align-items-center background-muted bg-hh'>
        <div className='bg-white p-4 p-md-5 p-lg-5 rounded col-9 col-md-6 col-lg-3 m-auto'>
            <div className='d-flex justify-content-center mb-5'>
                <img src={logo} className="img-fluid logo" />
            </div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <div className='text-left p-1'>
                        <label htmlFor='email'><strong>Email:</strong></label>
                    </div>
                    <input type={'email'} placeholder='Enter Email' name='email' 
                    onChange={handleInput} className='form-control rounded-0' />
                    {errors.email && <span className='text-danger d-block text-left p-1'>{errors.email}</span>}
                </div> 
                <div className='mb-4'>
                    <div className='text-left p-1'>
                        <label htmlFor='password'><strong>Password:</strong></label>
                    </div>
                    <input type={'password'} placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0' />
                    {errors.password && <span className='text-danger d-block text-left p-1'>{errors.password}</span>}
                </div> 
                <button type='submit' className='btn btn-success w-100 mb-4 rounded-0'><strong>Login</strong></button>
                <p> First time here? - <Link to="/signup" className='text-decoration-none'>Register</Link> </p>            
            </form>
        </div>
    </div>
  )
}

export default Login