import React from 'react';
import Category from './Category';

const Categories = () => {

    // const categories = [
    //     {
    //         id: 1,
    //         name: 'Shoes',
    //         img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
    //     },
    //     {
    //         id: 2,
    //         name: 'Mens Collection',
    //         img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
    //     },
    //     {
    //         id: 3,
    //         name: 'Women Collection',
    //         img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
    //     },
    //     {
    //         id: 4,
    //         name: 'Bags',
    //         img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
    //     },
    //     {
    //         id: 5,
    //         name: 'Electronics',
    //         img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
    //     },
    //     {
    //         id: 5,
    //         name: 'Foods',
    //         img: "https://i1.wp.com/fashionablymale.net/wp-content/uploads/2021/09/Versace-x-Fendi-Mens-PreFall-2022-cover.jpg?fit=1200%2C675"
    //     },
    // ]

    return (
        <div>
            <h1 className='text-2xl'>All Categories</h1>


            <div>
                <div className='grid mt-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[1200px] mx-auto gap-6'>
                    {/* {
                        categories.map(cat => <Category
                            key={cat.id}


                        ></Category>)



                    } */}



                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://media.istockphoto.com/photos/stylish-business-clothing-for-businessman-picture-id504742864?b=1&k=20&m=504742864&s=612x612&w=0&h=3cUlVTsSBVLdJCadeSuQXBS1oSxKpy1CFSRjsVlZ3XU=" alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mens Collection</h2>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://media.istockphoto.com/photos/stylish-business-clothing-for-businessman-picture-id504742864?b=1&k=20&m=504742864&s=612x612&w=0&h=3cUlVTsSBVLdJCadeSuQXBS1oSxKpy1CFSRjsVlZ3XU=" alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mens Collection</h2>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://media.istockphoto.com/photos/stylish-business-clothing-for-businessman-picture-id504742864?b=1&k=20&m=504742864&s=612x612&w=0&h=3cUlVTsSBVLdJCadeSuQXBS1oSxKpy1CFSRjsVlZ3XU=" alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mens Collection</h2>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://media.istockphoto.com/photos/stylish-business-clothing-for-businessman-picture-id504742864?b=1&k=20&m=504742864&s=612x612&w=0&h=3cUlVTsSBVLdJCadeSuQXBS1oSxKpy1CFSRjsVlZ3XU=" alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mens Collection</h2>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://media.istockphoto.com/photos/stylish-business-clothing-for-businessman-picture-id504742864?b=1&k=20&m=504742864&s=612x612&w=0&h=3cUlVTsSBVLdJCadeSuQXBS1oSxKpy1CFSRjsVlZ3XU=" alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mens Collection</h2>

                        </div>
                    </div>
                    <div>




                    </div>
                </div>

            </div>

        </div >
    );
};

export default Categories;