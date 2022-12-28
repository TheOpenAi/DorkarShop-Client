import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { UserContext } from '../../../../context/UserProvider';

const AddProduct = () => {
    const userContext = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    });

    const currentDate = new Date();
    const date = format(currentDate, 'PPpp');


    const handleAddProduct=(data:any)=>{
        const { name, resellPrice, originalPrice, condition, phone, location, description, purchaseYear, categoryId } = data;

        const formData = new FormData();
        console.log(data, userContext?.user?.name, userContext?.user?.email);

        // formData.append('image', data.image[0]);
        // console.log(formData);

        // const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgbbHashKey}`;

        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(img => {
        //         if (img.success) {
        //             const product = {
        //                 name,
        //                 image: img.data.url,
        //                 posted: date,
        //                 resellPrice,
        //                 originalPrice,
        //                 condition,
        //                 phone,
        //                 location,
        //                 description,
        //                 purchaseYear,
        //                 seller: userContext?.user?.name,
        //                 email: userContext?.user?.email,
        //                 categoryId,
        //                 isAvailable: true,
        //                 advertise: false
        //             };
        //             console.log(product);
        //             fetch('https://mobile-mart-server-siamcse.vercel.app/products', {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json'
        //                 },
        //                 body: JSON.stringify(product)
        //             })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     console.log(data);
        //                     if (data.acknowledged) {
        //                         toast.success('Product added successfully.');
        //                         navigate('/dashboard/myproducts');

        //                     }
        //                 })
        //         }
        //     })

    }

    return (
        <div className='lg:w-[1200px] mx-auto p-7'>
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='md:grid grid-cols-3 gap-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("name")} placeholder='Enter Product Name' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product  Price</span></label>
                        <input type="number" {...register("price")} placeholder='Enter Product Price In Taka ' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
                        <input type="text" {...register("seller")} className="input input-bordered w-full max-w-xs" />
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
                                categories.map((category:any) => <option
                                    key={category._id}
                                    value={category._id}
                                    className="capitalize"
                                >{category.title}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("imgUrl")} className="w-full mb-6  text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50    " />
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