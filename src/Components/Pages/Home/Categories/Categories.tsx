import Aos from 'aos';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Category from './Category';

const Categories = () => {
    Aos.init();
    const categories1 = [
        {
            id: 1,
            name: 'Shoes',
            img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
        },
        {
            id: 2,
            name: 'Mens Collection',
            img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
        },
        {
            id: 3,
            name: 'Women Collection',
            img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
        },
        {
            id: 4,
            name: 'Bags',
            img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
        },
        {
            id: 5,
            name: 'Electronics',
            img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
        },
        {
            id: 5,
            name: 'Foods',
            img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
        },
    ]

    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [])
    console.log(categories)

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




