
import React from 'react';
import Aos from 'aos';
const Cart = (_Props: any) => {

    const { setIsOpen } = _Props;
    // set type
    Aos.init();
    return (
        <main
            className=
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " 
                data-aos='fade-left' >
            <section className=
                " lg:w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ">
                <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll">
                 
                    <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                <h1 className='text-5xl text-black'> Cart</h1>
                    <p>Comming soon</p>

                </article>
            </section>

        </main>
    );
};

export default Cart;