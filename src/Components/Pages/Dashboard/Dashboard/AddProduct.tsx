import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { UserContext } from '../../../../context/UserProvider';

const AddProduct = () => {
    const userContext = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://dorkar-shop-server-siamcse.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    });

    const currentDate = new Date();
    const date = format(currentDate, 'PPpp');


    const handleAddProduct = (data: any) => {
        const { model, price, phone, details, category, brand } = data;

        const formData = new FormData();
        console.log(data, userContext?.user?.name, userContext?.user?.email);

        formData.append('image', data.image[0]);
        console.log(formData);

        const url = `https://api.imgbb.com/1/upload?key=354bd7b528be9f1e40354337c29e2d2f`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(img => {
                if (img.success) {
                    const product = {
                        model,
                        brand,
                        imgUrl: img.data.url,
                        posted: date,
                        price,
                        phone,
                        details,
                        seller: userContext?.user?.name,
                        email: userContext?.user?.email,
                        category,
                        isAvailable: true,
                        advertise: false
                    };
                    console.log(product);
                    fetch('https://dorkar-shop-server-siamcse.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success('Product added successfully.');
                                navigate('/dashboard/myProduct');

                            }
                        })
                }
            })

    }

    return (
        <div className='lg:w-[1200px] mx-auto p-7'>
                 <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link to={'/home'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            dashboard
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Add Products
                    </li>
                </ul>
            </div>
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='md:grid grid-cols-3 gap-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("model")} placeholder='Enter Product Name' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product  Price</span></label>
                        <input type="number" {...register("price")} placeholder='Enter Product Price In Taka ' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Brand</span></label>
                        <input type="text" {...register("brand")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile number</span></label>
                        <input type="text" {...register("phone")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Select a category</span></label>
                        <select
                            {...register("category")}
                            className="select input-bordered w-full max-w-xs capitalize" >
                            <option className='text-gray-900 ' selected disabled >Select A Option</option>
                            {
                                categories.map((category: any) => <option
                                    key={category._id}
                                    value={category.title}
                                    className="capitalize"
                                >{category.title}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image")} className="w-full mb-6  text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50    " />
                </div>
                <div className="form-control w-full max-w-xs  ">
                    <label className="label"> <span className="label-text">Details</span></label>
                    <textarea {...register("details")} placeholder='Write here' className="textarea textarea-bordered" />
                </div>
                <div className='text-center my-16'>
                    <button type='submit' className='text-white 
                        bg-gradient-to-r from-primary to-secondary hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 '>Add a Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;