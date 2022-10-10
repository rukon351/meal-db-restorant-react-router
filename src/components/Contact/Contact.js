import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='flex flex-col  jusfity-center items-center'>
                <h1 className='font-mono text-xl text-cennter md:text-3xl'>Contact Us. Our Section Area Down Bellow</h1>
                <div>
                    <Link>Mymensingh Address</Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;