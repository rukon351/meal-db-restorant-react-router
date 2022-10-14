import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='flex flex-col  jusfity-center items-center'>
                <h1 className='font-mono text-xl text-cennter md:text-3xl'>Contact Us, Our Section Area Down Bellow</h1>
                <div className='flex gap-2 pt-4 px-4'>
                    <Link className='md:py-4 px-2 text-white bg-sky-600 text-center rounded' to='mym-address'>Mymensingh Address</Link>
                    <Link className='md:py-4 px-2 text-white bg-sky-600 text-center rounded' to='muk-address'>Muktagacha Address</Link>
                    <Link className='md:py-4 px-2 text-white bg-sky-600 text-center rounded' to='kat-address'>KatoLsha Address</Link>
                    <Link className='md:py-4 px-2 text-white bg-sky-600 text-center rounded' to='onl-address'>Online Address</Link>
                </div>
                <div className='py-20 flex justify-center items-center w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
        </section>
    );
};

export default Contact;