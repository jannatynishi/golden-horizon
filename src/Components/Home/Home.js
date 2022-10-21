import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../images/banner.jpg';
import './Home.css'
const Home = () => {
    const id = 1;
    const navigate = useNavigate();
    const navigateRoute = id =>{
        navigate(`/home/${id}`)
    }
    return (
        <div className='ml-12 mt-12 grid grid-cols-2'>
           <div className=''>
            <p className=' font-bold mt-32 text-4xl text-indigo-900'>Better Banking is just a few keystrokes away</p>
            <button onClick={()=> navigateRoute(id)} className='font-semibold mt-8 pt-2 px-4 pb-2 rounded-full bg-indigo-900 text-white'>Learn more about us</button>
           </div>
           <div className='ms-8 justify-end banner'>
            <img src={banner} alt="" />
           </div>
           
        </div>
    );
};

export default Home;