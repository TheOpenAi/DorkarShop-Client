import React from 'react';
import Category from './Category';

const Categories = () => {

    const categories = [
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

    return (


        <div>


            <div>

                <div className="flex items-center justify-center h-auto bg-white py-24">
                    <div className="flex flex-col">

                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">

                                <h1 className="text-gray-900 text-4xl font-bold mb-8">


                                    All Categories
                                </h1>



                            </div>
                        </div>


                        <div className="">
                            <div className="container">



                                <div className=" grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10  px-4">


                                    {
                                        categories.map((category, idx) => (

                                            <div className="card w-72 bg-base-100 shadow-xl">
                                                <div className="card-body">
                                                    <h2 className="card-title">{category.name}</h2>


                                                </div>
                                            </div>


                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        // <div>
        //     <h1 className='text-gray-900 text-4xl font-bold mb-8'>All Categories</h1>


        //     <div>
        //         <div className='grid mt-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[1200px] mx-auto gap-6'>




        //             {
        //                 categories.map((category, idx) => (


        //                     <div className="card w-72 bg-base-100 shadow-xl">
        //                         <div className="card-body">
        //                             <h2 className="card-title">{category.name}</h2>


        //                         </div>
        //                     </div>

        //                     // <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //                     //     <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        //                     //     <div className="card-body">
        //                     //         <h2 className="card-title">{category.name}</h2>
        //                     //         <p>Pr</p>
        //                     //         <div className="card-actions justify-end">
        //                     //             <button className="btn btn-primary">Buy Now</button>
        //                     //         </div>
        //                     //     </div>
        //                     // </div>
        //                 ))
        //             }







        //         </div>
        //     </div>

        // </div>


    );
};

export default Categories;




