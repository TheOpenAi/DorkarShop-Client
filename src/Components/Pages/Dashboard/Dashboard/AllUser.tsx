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

                                    <label htmlFor="Confirmation-modal" className=" btn 
                                
                                text-white   bg-gradient-to-r from-primary to-secondary   border-none">Make Admin</label>
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

