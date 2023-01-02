import React from 'react';
import { Link } from 'react-router-dom';

import route404 from "../../Assets/404webp.webp"

const NotFoundPage = () => {
    return (
        <div className='grid lg:grid-cols-2 lg:w-[1200px] lg:m-auto'>
            <div>
                <img src={route404} alt=''></img>

            </div>
            <div className='my-auto md:mx-auto mx-5'>
                <h1 className='text-5xl font-bold text-blue-900 ' >Oops!Page not Found</h1>
                <p className='my-7 text-gray-400 text-lg'>We can not find what are you looking for.</p>
                <a href="/" className=" text-white font-semibold py-3 px-6 text-center rounded-xl transition bg-gradient-to-r from-primary to-secondary  focus:secondary print:hidden ">
                    GO BACK TO HOME
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;