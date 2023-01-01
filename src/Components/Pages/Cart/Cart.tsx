/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useState, useEffect, useContext } from 'react';
import Aos from 'aos';
import { FaTrashAlt } from 'react-icons/fa'
import { UserContext } from '../../../context/UserProvider';

const Cart = (_Props: any) => {
    const userContext = useContext(UserContext);
    const [cartProducts, setProducts] = useState<any[]>([]);

    const { setIsOpen } = _Props;
    // set type
    Aos.init();

    useEffect(() => {
        if (userContext?.user?.email) {
            fetch(`https://dorkar-shop-server-siamcse.vercel.app/carts?email=${userContext?.user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data);
                })
        }

    }, [userContext?.user?.email, userContext?.refresh]);
    console.log(cartProducts);

    const handleRemove = (id: any) => {
        console.log(id);

        fetch(`https://dorkar-shop-server-siamcse.vercel.app/carts/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    userContext?.setRefresh(!userContext?.refresh);
                }
            })
    }

    // total price 
    let sum = 0;
    cartProducts.forEach((obj) => {
        sum += obj.price;
    });
    return (
        <main
            className=
            " fixed overflow-scroll z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out "
            data-aos='fade-left' >
            <section className=
                " lg:w-screen max-w-lg right-0 absolute bg-white shadow-xl rounded-xl ">
                <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll">

                    <button type="button" className="inline-flex p-2 text-red-600 w-10 transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-200" onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h1 className='text-5xl text-black'> Cart</h1>
                    <div className="mt-8">
                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y m-5 divide-gray-200">
                                {cartProducts.map((product) => (
                                    <li key={product._id} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={product.imgUrl}
                                                alt={product.imageAlt}
                                                className="h-full w-full  object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between items-center text-base font-medium text-accent">
                                                    <h3>
                                                        <a href={product.href}>{product.model}</a>
                                                    </h3>

                                                    <p className="text-lg text-secondary">$ {product.price}</p>



                                                </div>
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">



                                                <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                                                <div className='hover:bg-red-300 px-2 py-1  rounded-full'>

                                                    <button onClick={() => handleRemove(product._id)}
                                                        type="button"
                                                        className="font-medium text-red-600 text-lg">
                                                        <FaTrashAlt />
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p className='text-secondary text-lg'>$ {sum}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="text-xl w-full text-white  right-2.5 bottom-2.5
                                bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l focus:ring-4 font-medium rounded-lg  px-10 py-3 uppercase"
                            >
                                Checkout
                            </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                or{" "}
                                <button
                                    type="button"
                                    className="font-medium text-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>


                </article>
            </section >

        </main >
    );
};

export default Cart;