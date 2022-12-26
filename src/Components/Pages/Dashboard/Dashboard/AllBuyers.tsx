import React from 'react';

const AllBuyers = () => {
    return (
        <div>

            <div>
                <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>All Buyers</h1>

                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Verification</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr  >
                                <th>1</th>
                                <td><div className="mask mask-squircle w-12 h-12">
                                    <img src="https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg" alt='' />
                                </div></td>

                                <td>Hart Hagerty</td>
                                <td>hart@gmail.com</td>

                                <td>




                                    <label htmlFor="Confirmation-modal" className=" btn bg-gradient-to-r from-blue-800 to-blue-700 border-none">Verify</label>









                                </td>

                                <td>




                                    <label htmlFor="Confirmation-modal" className=" btn bg-gradient-to-r from-red-800 to-red-700 border-none">Delete</label>









                                </td>


                            </tr>



                        </tbody>
                    </table>
                </div>





            </div>

        </div>
    );
};

export default AllBuyers;