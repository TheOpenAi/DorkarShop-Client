import React from 'react';


const Login = () => {
    return (
        <div className='w-[1300px] mx-auto my-28'>
            <div className='flex justify-between text-xl my-5 mx-4  '>
                <h1>Anamika</h1>
                <h1>New Here?<span className='text-blue-600'>Register</span> Here</h1>

            </div>
            <div className='bg-gray-100 lg:grid grid-cols-2 p-20  gap-0'>

                <div>

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
                    <h1 className='mt-5 ml-[27rem] '>Forget Password?</h1>
                </div>
                <div className='my-5'>
                    <button className='btn btn-wide ml '>Login</button>
                    <h1 className=' text-sm mr-40 my-1'>Or Login With</h1>
                    <button className='btn btn-wide'>Login With Google</button>

                    <br />
                    <button className='btn btn-wide mt-4'>Login With Facebook</button>

                </div>
            </div>






        </div>
    );
};

export default Login;