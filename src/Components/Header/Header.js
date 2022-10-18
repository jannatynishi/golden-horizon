import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/golden-logo.png'

const Header = () => {


    return (
        <nav className='flex font-medium'>
            <div className='w-16 h-16 pt-2 mr-8 ml-12'>
                <img src={logo} alt="" />
            </div>
            <div className='mr-72 space-x-16 pt-8 text-indigo-900'>
                <Link to='/' className='hover:text-indigo-500'>Home</Link>
                <Link to='business' className='hover:text-indigo-500'>Business</Link>
                <Link to='wealth-management' className='hover:text-indigo-500'>Wealth Management</Link>
                <Link to='options' className='hover:text-indigo-500'>Options</Link>
                <Link to='about-us' className='hover:text-indigo-500'>About Us</Link>
            </div>
            <div className='grid grid-cols-2 pt-6 gap-6 justify-items-end text-white'>

                <Link to='sign-up' className='hover:bg-indigo-700 bg-indigo-900 px-2 pt-2 rounded-full'>Sign up</Link>

                <Link to='login' className='hover:bg-indigo-700 bg-indigo-900 px-2 pt-2 rounded-full'>Login</Link>
            </div>

        </nav>
    );
};

export default Header;