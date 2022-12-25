import React from 'react';

const Signup = () => {
    return (
        <div className='w-[1300px] mx-auto my-28'>
            <div className='flex justify-between text-xl my-5 mx-4  '>
                <h1>Welcome To Dorkar Shop!!Please SignUp</h1>
                <h1>Already Have An Account?<span className='text-blue-600'>Login</span></h1>

            </div>
            <div className='bg-gray-100 p-20'>

                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Full Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="input input-bordered " />
                    </div>

                </div>

            </div>






        </div>
    );
};

export default Signup;