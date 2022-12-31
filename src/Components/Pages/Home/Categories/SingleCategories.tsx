import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegHeart, FaExchangeAlt, FaQuestion, FaDollarSign } from 'react-icons/fa'

const SingleCategories = () => {
    const products: any = useLoaderData();

     console.log(products);
    return (
        <div className='bg-gray-50 md:w-3/4 pt-20 mx-auto'>

            <h1 className='text-3xl text-accent font-semibold text-left ml-10'> Welcome to {products[0].category}  it has {products.length} Products</h1>
            <div className='w-[300px] h-[5px]  bg-secondary '></div>
            <hr />


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 m-10 mt-16'>
                {


                    products.map((product: any) => (

                        <Link key={product._id} to={`/productsdetails/${product._id}`}>
                            <div data-aos='fade-right'
                                data-aos-duration='1000'
                                data-aos-delay='80'>
                                <div key={product._id} className=" bg-base-100 cursor-pointer shadow-lg hover:scale-110 transition-transform hover:shadow-accent min-w-[250px] max-w-[300px] mx-auto" >
                                    <div className='h-72'>
                                        <img src={product.imgUrl} alt="" className='h-72 w-auto mx-auto  overflow-hidden' />
                                    </div>

                                    <div className="h-60 bg-white">
                                        <div className='w-full bg-gray-100 text-gray-400 px-5 items-center h-10 flex justify-between'>
                                            <p className='border-b border-gray-400'>Fort Cane</p>
                                            <p>Model 30</p>
                                        </div>
                                        <div className='px-5'>
                                            <div className='flex justify-between'>
                                                <h2 className="text-accent  text-2xl font-medium py-2">{product.brand}</h2>
                                                <h2 className="text-accent  text-2xl font-semibold py-2">{product.model}</h2>
                                            </div>
                                            <h2 className="text-left text-gray-500 text-xl">$ {product.price}</h2>
                                            <div className='flex justify-between items-center py-3'>
                                                <button className='btn btn-primary'>See Details</button>
                                                <div className='flex items-center text-accent '>
                                                    <div className='border-secondary p-1'>

                                                        <FaRegHeart className='text-2xl mr-2' />
                                                    </div>

                                                    <div className='border-2 rounded-full border-secondary p-1'>

                                                        < FaExchangeAlt className='text-xl' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full bg-gray-100 text-gray-400 px-5 items-center h-10 flex justify-between'>

                                            <div className='flex items-center justify-between'>
                                                <div className='border-2 rounded-full border-yellow-500 mx-1'>

                                                    <FaDollarSign className='text-yellow-500' />
                                                </div>
                                                <p className=''> Buy now</p>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <div className='border-2 rounded-full border-red-500 mx-1'>

                                                    <FaQuestion className='text-red-500 ' />
                                                </div>
                                                <p> Question</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>


                    ))

                }
            </div>
        </div>
    );
};

export default SingleCategories;