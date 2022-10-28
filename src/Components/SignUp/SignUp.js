import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import PageTitle from '../Shared/PageTitle';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [accountCreated, setAccountCreated] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
        // console.log(event.target.value)

    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        // console.log(event.target.value) 
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
        // console.log(event.target.value) 
    }
    const handleCreateSignup = event => {

        event.preventDefault();
        if (password !== confirmPassword) {
            setError('*Confirm password did not match')
        }
        if (password === confirmPassword) {
            setAccountCreated('Account created successfully')
        }
        if (password.length < 6) {
            setError('*Password must be at least 6 character')
        }
        createUserWithEmailAndPassword(email, password);

    }
    if (user) {
        navigate('/home');
    }

    return (
        <form onSubmit={handleCreateSignup} className='mx-auto mt-28 box-border h-1/2 w-1/3 p-4 shadow-2xl'>
            <label>
                <span className="block pr-64 text-xl font-medium text-indigo-900">Email</span>
                <input onBlur={handleEmailBlur} type="text" required placeholder='Enter Your Email' className="mt-1 w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-500 " />
            </label>
            <label >
                <span className="text-indigo-900 block pr-56 pt-4 text-xl font-medium">Password</span>
                <input onBlur={handlePasswordBlur} type="password" required placeholder='Enter Your password' className="mt-1 w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-500 " />
            </label>
            <label >
                <span className="text-indigo-900 block pr-56 pt-4 text-xl font-medium">Confirm Password</span>
                <input onBlur={handleConfirmPasswordBlur} type="password" required placeholder='Confirm Your password' className="mt-1 w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-500 " />
            </label>
            <br />
            <p className='text-rose-600 pt-4'>{error}</p>

            <label>
                <input type="submit" className='hover:bg-indigo-700 mt-6 px-4 py-2 text-white bg-indigo-900 rounded-full' value="Submit" />
                {/* <button onClick={handleSubmit} className='mt-8 px-4 py-2 text-white bg-indigo-900 rounded-full '>Submit</button> */}
            </label>
            <p className=' text-green-600'>{accountCreated}</p>
            <p className='text-indigo-900 pt-6'>Already have an Account? <Link to='/login' className='underline text-indigo-500'> Login from here</Link></p>
            <PageTitle title='Sign up'></PageTitle>
        </form>

    );
};

export default SignUp;