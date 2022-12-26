import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import aos
import Aos from 'aos';

import Cart from '../Pages/Cart/Cart';


const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    Aos.init();

    return (

        <header className='font-serif'>
            {/* <!-- lg+ --> */}
            <div className="bg-gray-100 border-b border-gray-200">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="relative flex items-center font-sans justify-between h-16 lg:h-20">
                        <ul className="hidden lg:flex lg:items-center lg:space-x-10 text-xl">
                            <li><Link to={'/home'}> Home</Link></li>
                            <li><Link to={'/about'}> About</Link></li>
                            <li><Link to={'/login'}> Login</Link></li>
                            <li><Link to={'/singup'}> Singup</Link></li>

                            <li><Link to={'/dashboard'}> Dashboard</Link></li>


                        </ul>

                        <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                            <div className="flex-shrink-0">
                                <h1 className='text-4xl text-primary font-sans font-extrabold'> Dorkar Shop</h1>
                            </div>
                        </div>

                        <button type="button" className="flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>

                        <button type="button" className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:space-x-10  ">
                            <form >
                                <div className="relative ">
                                    <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none bg-[#F3F4F6]">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input type="search" id="default-search"

                                        className=" bg-[#F3F4F6] block w-full p-4 pl-10 text-sm text-gray-900  " placeholder="Search , " required></input>
                                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5
                                 bg-gradient-to-r from-primary to-secondary hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                                </div>
                            </form>

                            <Link to={'#'} title="" className="flex items-center justify-center w-10 h-10 text-white bg-gray-500 rounded-full">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setIsOpen(!isOpen)}>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- xs to lg --> */}
            {navbarOpen && (
                <nav className="py-4 bg-white lg:hidden" data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                >
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

                            <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100" onClick={() => setNavbarOpen(!navbarOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-6" >
                            <ul className="flex flex-col space-y-2 text-xl">
                                <li><Link to={'/home'}> Home</Link></li>
                                <li><Link to={'/about'}> About</Link></li>
                                <li><Link to={'/login'}> Login</Link></li>
                                <li><Link to={'/singup'}> Singup</Link></li>

                                <li><Link to={'/dashboard'}> Dashboard</Link></li>

                            </ul>

                            <hr className="my-4 border-gray-200" />

                            <div className="flex flex-col space-y-2">

                                <form >
                                    <div className="relative rounded-lg">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-[#F3F4F6]">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input type="search" id="default-search"
                                            className=" bg-[#F3F4F6] block w-full p-4 pl-10 text-sm text-gray-900  " placeholder="Search Prodcuts, " required></input>
                                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5
                                 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </nav>)
            }

            {
                // isOpen ? <Cart isOpen={isOpen} setIsOpen={setIsOpen}></Cart> : null
            }
            {
                isOpen ? <Cart isOpen={isOpen} setIsOpen={setIsOpen}></Cart> : null
            }
        </header>




    )

};

export default Header;