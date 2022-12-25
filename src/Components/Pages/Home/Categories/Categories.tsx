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
            <h1>All Categories</h1>


            <div>
                <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        categories.map(cat => <Category
                            key={cat.id}
                            cat={cat}
                        ></Category>)



                    }
                </div>

            </div>

        </div>
    );
};

export default Categories;