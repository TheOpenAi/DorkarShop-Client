import Aos from 'aos';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Category from './Category';

const Categories = () => {
    Aos.init();
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])
    return (
        <div>
            <div className="flex items-center justify-center h-auto bg-white pt-24">
                <div className="flex flex-col">

                    <div className="flex flex-wrap justify-center text-center mb-24" data-aos='fade-right'>
                        <div className="w-full lg:w-6/12 px-4">
                            <h1 className=" text-4xl font-bold mb-8">
                                All Categories
                            </h1>
                        </div>
                    </div>


                    <div className="">
                        <div className=" grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10  px-4">
                            {
                                categories.map((category, idx) => (

                                    <div key={idx} className="card  w-52 bg-base-100 shadow-lg shadow-primary" data-aos='fade-up'>
                                        <div className="card-body">
                                            <Link to={`/category/${category._id}`}><h2 className="card-title capitalize">{category?.title}</h2></Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>




    );
};

export default Categories;




