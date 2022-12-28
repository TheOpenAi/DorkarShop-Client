import React from 'react';

const AddProduct = () => {
    return (
        <div className='lg:w-[1200px] mx-auto p-7'>
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Add A Product</h2>
            <form >
                <div className='md:grid grid-cols-3 gap-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" placeholder='Enter Product Name' className="input input-bordered w-full max-w-xs" />

                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product  Price</span></label>
                        <input type="number" placeholder='Enter Product Price In Taka ' className="input input-bordered w-full max-w-xs" />

                    </div>











                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
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
                            <option className='text-gray-900 ' selected disabled >Select A Option</option>
                            <option selected > Mens Collection</option>
                            <option selected >Women Collection</option>
                            <option selected >Shoes</option>

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
                    <button type='submit' className='text-white 
 bg-gradient-to-r from-primary to-secondary hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 '>Add a Product</button>

                </div>
            </form>
        </div>
    );
};

export default AddProduct;