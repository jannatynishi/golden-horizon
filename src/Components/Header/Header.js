import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/golden-logo.png'
import app from '../../Firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'


const auth = getAuth(app);

const Header = () => {
    const [user, setUser] = useState ({});
    const googleProvider = new GoogleAuthProvider();
    const handleSignup = () => {
      signInWithPopup(auth, googleProvider)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          console.log(error);
        })
    }
    const handleSignOut =()=>{
        signOut(auth)
        .then( ()=>{
           setUser({user}) 
        })
        .catch(error =>{
            setUser({error})
        })
    }
    return (
        <nav className='flex font-medium'>
            <div className='w-16 h-16 pt-2 mr-8 ml-12'>
                {/* <img className='h-20px w-20px' src='../../../public/images/golden-logo.png' alt="" /> */}
                <img src={logo} alt="" />
            </div>
            <div className='mr-72 space-x-16 pt-8 text-indigo-900'>
                <Link to='/'>Home</Link>
                <Link to='business'>Business</Link>
                <Link to='wealth-management'>Wealth Management</Link>
                <Link to='options'>Options</Link>
                <Link to='about-us'>About Us</Link>
            </div>
            <div className='grid grid-cols-2 pt-6 gap-6 justify-items-end text-white'>
                <Link to='sign-up' className='bg-indigo-900 px-2 pt-2 rounded-full'>Sign up</Link>
                <Link onClick={handleSignup} to='login' className='bg-indigo-900 px-2 pt-2 rounded-full'>Login</Link>
            </div>
            {/* {
                user.map(p =><SignUp p={p} 
                    handleSignup={handleSignup} 
                    handleSignOut={handleSignOut}
                    ></SignUp>)
                <SignUp user={user} handleSignOut={handleSignOut} handleSignup={handleSignup}></SignUp>
            } */}
        </nav>
    );
};

export default Header;