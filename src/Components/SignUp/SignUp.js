import React, { useState } from 'react';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const handleEmailBlur = event =>{
        setEmail(event.target.value);
        console.log(event.target.value)
    }
    return (
         <form className='mx-auto mt-28 box-border h-1/2 w-1/3 p-4 shadow-2xl'>
            <label >
                <span className="block pr-64 text-xl font-medium text-indigo-900">Email</span>
                <input onBlur={handleEmailBlur} type="text" placeholder='Enter Your Email' className="mt-1 w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-500 " />
            </label>
            <label >
                <span className="text-indigo-900 block pr-56 pt-4 text-xl font-medium">Password</span>
                <input type="password" placeholder='Enter Your password' className="mt-1 w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-slate-500 " />
            </label>
            <br />
            <label>
                <button className='mt-8 px-4 py-2 text-white bg-indigo-900 rounded-full '>Submit</button>
            </label>
        </form>

    );
};

export default SignUp;