import React from 'react';

const MyProduct = () => {
    return (
        <div>
            <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>My Products </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>

                            <th>Name</th>
                            <th>Advertise</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr  >
                            <th> 1</th>
                            <td><div className="mask mask-squircle w-12 h-12">
                                <img src="" alt="Avatar Tailwind CSS Component" />
                            </div></td>

                            <td>A</td>
                            <td>
                                <button className='btn' >Click Here</button>
                            </td>

                            <td>Available</td>
                            <td>
                                <td>
                                    <label className="btn bg-gradient-to-r from-red-800 to-red-700 border-none">Delete</label>
                                </td>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>





        </div>
    );
};

export default MyProduct;