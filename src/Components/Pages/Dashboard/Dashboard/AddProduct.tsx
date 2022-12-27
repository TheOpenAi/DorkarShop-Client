import React from 'react';

const AddProduct = () => {
    return (
        <div className='lg:w-[1200px] mx-auto p-7'>
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Add A Product</h2>
            <form >
                <div className='md:grid grid-cols-3 gap-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" />

                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Original Price</span></label>
                        <input type="number" placeholder='Enter original price in taka ' className="input input-bordered w-full max-w-xs" />

                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Selling Price</span></label>
                        <input type="number" placeholder='Enter product price in taka' className="input input-bordered w-full max-w-xs" />

                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Purchase year</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" />

                    </div>





                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product condition type</span></label>

                        <input type="text" className="input input-bordered w-full max-w-xs" />


                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile number</span></label>
                        <input type="number" className="input input-bordered w-full max-w-xs" />


                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Select a category</span></label>
                        <select

                            className="select input-bordered w-full max-w-xs" >
                            <option disabled selected ></option>
                            <option disabled selected ></option>
                            <option disabled selected ></option>

                        </select>

                    </div>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" className="w-full mb-6  text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50    " />

                </div>


                <div className="form-control w-full max-w-xs  ">
                    <label className="label"> <span className="label-text">Details</span></label>
                    <textarea placeholder='Write here' className="textarea textarea-bordered" />



                </div>


                <div className='text-center my-16'>
                    <button className='btn'>Add a Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;