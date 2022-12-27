import React from 'react';

const NewsLetter = () => {
    return (
        <div className="flex justify-around items-center bg-indigo-600 py-16 ">
            <div>
                <h2 className='text-white text-4xl font-bold'>Get 20% Discount For Subscriber</h2>
                <h3 className='text-white text-2xl '>Sign up for our newsletter to get up-to-date from us</h3>
            </div>
            <div>
            <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full pr-16" />
                                <button className="btn  absolute top-0 right-0 rounded-l-none text-white">Submit</button>
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default NewsLetter;