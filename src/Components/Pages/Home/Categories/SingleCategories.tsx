import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCategories = () => {
    const products:any = useLoaderData();
  

    return (
        <div className='bg-white w-[100%] h-[100%]'>
            <h1 className='text-2xl font-serif font-bold'> Welcome to  Categories Name </h1>

            <div className='grid grid-cols-3 w-[90%] mx-auto mt-16'>
                {
                   

                    products.map((product:any) => (

                        <Link key={product._id} to={`/productsdetails/${product._id}`}>
                            <div data-aos='fade-right'
                                data-aos-duration='1000'
                                data-aos-delay='80'>
                                <div key={product._id} className="card w-[60%] h-[80%] bg-base-100 cursor-pointer shadow-lg hover:scale-110 transition-transform hover:shadow-secondary rounded-2xl " >
                                    <div className="card-body text-center">
                                        <img src={product.imgUrl} alt="" className='w-[70%] h-[60%]' />
                                        <h2 className="card-title py-2"> Name :{product.model}</h2>
                                        <h2 className="card-title "> Price :{product.price}</h2>
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