import React from 'react';

const AllUser = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>All Sellers</h1>

                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Make Admin</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr >
                                <th> 1</th>
                                <td><div className="mask mask-squircle w-12 h-12">
                                    <img src="" alt="Avatar Tailwind CSS Component" />
                                </div></td>

                                <td>A</td>
                                <td>b</td>
                                <td>c</td>



                                <td  >

                                    <button className='btn  bg-gradient-to-r from-blue-800 to-blue-700 border-none'>Make Admin</button>
                                </td>




                            </tr>


                        </tbody>
                    </table>
                </div>

            </div>

        </div >
    );
};

export default AllUser;

