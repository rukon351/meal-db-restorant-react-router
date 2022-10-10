import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-[#E0D9D9] px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-xl text-gray-600'>M<span className='text-sky-600'>ea</span>
                    l db</Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    );
};

export default Header;