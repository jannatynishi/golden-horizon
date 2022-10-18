import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
        // console.log(event.target.value)

    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        // console.log(event.target.value) 
    }
    if(user){
        navigate('/home');
    }
    const handleLoginUser = event =>{
        event.preventDefault();
        // if(password)

        // if (loading) {
        //     return <p>Loading...</p>;
        //   }
        signInWithEmailAndPassword(email, password);
    }
    return (
        <form onSubmit={handleLoginUser} className='mx-auto mt-28 box-border h-1/2 w-1/3 p-4 shadow-2xl'>
        <label>
            <span className="block pr-64 text-xl font-medium text-indigo-900">Email</span>
            <input onBlur={handleEmailBlur} type="text" required placeholder='Enter Your Email' className="mt-1 w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-500 " />
        </label>
        <label >
            <span className="text-indigo-900 block pr-56 pt-4 text-xl font-medium">Password</span>
            <input onBlur={handlePasswordBlur} type="password" required placeholder='Enter Your password' className="mt-1 w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-500 " />
        </label>
    <p className='text-rose-500 pt-4'>{error?.message}</p>
        {
            loading && <p className='pt-4 text-indigo-900 font-medium'>Wait a minute...</p>
        }
        <br />
        <label>
            <input type="submit" className='hover:bg-indigo-700 mt-6 px-4 py-2 text-white bg-indigo-900 rounded-full' value="Submit"/>
            {/* <button onClick={handleSubmit} className='mt-8 px-4 py-2 text-white bg-indigo-900 rounded-full '>Submit</button> */}
        </label>
        <p className='text-indigo-900 pt-6'>New to Golden Horizon? <Link to='/sign-up' className='underline text-indigo-500'> Create an Account</Link></p>
    </form>
    );
};

export default Login;