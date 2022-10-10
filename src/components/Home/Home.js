import React from 'react';
import { Link } from 'react-router-dom';
import img from './home photo.jpg';
// import './Home.css';

const Home = () => {
    return (
        <div className='md: px-16 py-8'>
            <div className='flex flex-col justify-center h-[80vh] items-center text-center'>
                <h1 className='font-mono text-xl md:text-5xl text-gray-700 text-bold'>It's not just <span className='text-sky-600'>Food</span>, It's an <span className='text-sky-600'>Experience!</span> <span className='text-xl md:text-6xl'>☕</span></h1>
                <img className='w-[400px] md:w-[600px] py-10' src={img} alt="" />
                <Link to='/menu'>
                    <button className='py-2 px-20 text-white mt-3 rounded-full bg-cyan-600 tracking-wide'>
                        Menu
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;