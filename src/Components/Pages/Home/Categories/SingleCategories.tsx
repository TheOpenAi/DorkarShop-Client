import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategories = () => {
    const data = [
        {
            id: 1,
            name: 'Mobile',
            image: 'https://i.ibb.co/9qXHJL5/samsung-galaxy-m51-frandroid-2020-768x768.png',
            price: 1000
        },
        {
            id: 2,
            name: 'Mobile',
            image: 'https://i.ibb.co/9qXHJL5/samsung-galaxy-m51-frandroid-2020-768x768.png',
            price: 1000
        },
    ]
    return (
        <div className='bg-white w-[100%] h-[100%]'>
            <h1 className='text-2xl font-serif font-bold'> Welcome to  Categories Name </h1>

            <div className='grid grid-cols-3 w-[90%] mx-auto mt-16'>
                {

                    data.map((product, idx) => (

                  <Link to={'/productsdetails'}>     <div data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='80'>
                            <div key={idx} className="card w-[60%] h-[80%] bg-base-100 cursor-pointer shadow-lg hover:scale-110 transition-transform hover:shadow-secondary rounded-2xl " >
                                <div className="card-body text-center">
                                    <img src={product.image} alt="" className='w-[70%] h-[60%]' />
                                    <h2 className="card-title py-2"> Name :{product.name}</h2>
                                    <h2 className="card-title "> Name :{product.price}</h2>
                            
                                </div>
                             
                            </div>
                        </div></Link> 


                    ))

                }
            </div>
        </div>
    );
};

export default SingleCategories;