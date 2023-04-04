import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Modal } from '@mui/material';


import logo from '../../images/Buckit-Logo-TSP.png';
import SignUpValidation from './SignUpValidation';

function SignUp() {
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [open, setOpen] = useState(false);

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(SignUpValidation(values))
    };

    useEffect(() => {
        if (
          errors.first_name === '' &&
          errors.last_name === '' &&
          errors.email === '' &&
          errors.phone_number === '' &&
          errors.password === ''
        ) {
          axios.post('http://localhost:3001/api/users/signup', values)
            .then((res) => {
                console.log(res); 
                setOpen(true);
                setValues({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone_number: '',
                    password: '',
                  });
            })
            .catch((err) => console.log(err));

        }
    }, [errors]);


    return (
        <div className='d-flex justify-content-center align-items-center background-muted bg-hh'>
            <div className='bg-white p-4 p-md-5 p-lg-5 rounded col-9 col-md-6 col-lg-3 mx-auto mt-3 mb-3 '>
                <div className='d-flex justify-content-center mb-5'>
                    <img src={logo} className="img-fluid logo" />
                </div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {/* first_name */}
                    <div className='mb-3'>  
                        <div className='text-left p-1'>
                            <label htmlFor='first_name'><strong>First Name:</strong></label>
                        </div>
                        <input type={'text'} placeholder='Enter First Name' name='first_name'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.first_name && <span className='text-danger d-block text-left p-1'>{errors.first_name}</span>}
                    </div>

                    {/* last_name */}
                    <div className='mb-3'>  
                        <div className='text-left p-1'>
                            <label htmlFor='last_name'><strong>Last Name:</strong></label>
                        </div>
                        <input type={'text'} placeholder='Enter Last Name' name='last_name'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.last_name && <span className='text-danger d-block text-left p-1'>{errors.last_name}</span>}
                    </div> 

                    {/* email */}
                    <div className='mb-3'>
                        <div className='text-left p-1'>
                            <label htmlFor='email'><strong>Email:</strong></label>
                        </div>
                        <input type={'email'} placeholder='Enter Email' name='email'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger d-block text-left p-1'>{errors.email}</span>}
                    </div>

                    {/* phone_number */}
                    <div className='mb-3'>  
                        <div className='text-left p-1'>
                            <label htmlFor='phone_number'><strong>Phone Number:</strong></label>
                        </div>
                        <input type={'number'} placeholder='Enter Phone Number' name='phone_number'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.phone_number && <span className='text-danger d-block text-left p-1'>{errors.phone_number}</span>}
                    </div>

                    {/* password */}
                    <div className='mb-4'>
                        <div className='text-left p-1'>
                            <label htmlFor='password'><strong>Password:</strong></label>
                        </div>
                        <input type={'password'} placeholder='Enter Password' name='password'
                        onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger d-block text-left p-1'>{errors.password}</span>}
                    </div> 

                    <button type='submit' className='btn btn-success w-100 mb-4 rounded-0'><strong>Sign Up</strong></button>
                    <p>Already a User? <Link to="/" className='text-decoration-none'>Login</Link> </p>
                    
                    <Modal open={open} onClose={() => setOpen(false)} className='d-flex justify-content-center align-items-center'>
                        <div className='d-flex flex-column align-items-center bg-white p-4 p-md-5 p-lg-5 rounded col-9 col-md-6 col-lg-3 mx-auto mt-3 mb-3' >
                            <h2>Sign Up Successful!</h2>
                            <p>You can now login with your new account.</p>
                            <Link to={'/'} className='btn btn-success w-100 mb-4 rounded-0' onClick={() => setOpen(false)}><strong>Close</strong></Link>
                        </div>
                    </Modal>


                </form>
            </div>
        </div>
    )
}

export default SignUp