/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Related = (props: any) => {

    console.log();
    const { model, imgUrl, price, _id } = props.product;
    console.log();

    return (

        props?.product?.paid ?  null : <>
            <div onClick={() => props.setpicture(null)}>
                <Link to={`/productsdetails/${_id}`} >
                    <div className="bg-white shadow rounded overflow-hidden group h-[100%] w-[90%] border border-gray-600 hover:scale-110 p-5 ">
                        <div className="relative">
                            <img src={imgUrl} alt="product 1" className="w-[50%] mx-auto"></img>
                            {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                                 justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="view product">
                            <i className="fa-solid fa-magnifying-glass">
                                cart</i>
                        </a>
                        <a href="#"
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="add to wishlist">
                            <i className="fa-solid fa-heart">
                                Wish
                            </i>
                        </a>
                    </div> */}
                        </div>
                        <div className="pt-4 pb-3 px-4">

                            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary ease-in">
                                {model}</h4>

                            <div className="flex items-baseline mb-1 space-x-2 justify-center">
                                <p className="text-xl text-primary font-semibold">{price}</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span><i > <FaStar></FaStar> </i></span>
                                    <span><i > <FaStar></FaStar> </i></span>
                                    <span><i > <FaStar></FaStar> </i></span>
                                    <span><i > <FaStar></FaStar> </i></span>

                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150)</div>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>
        </>

    );
};

export default Related;