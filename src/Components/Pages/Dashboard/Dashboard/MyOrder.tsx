import React from 'react';

const MyOrder = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>All Orderss</h1>

                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th> Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Cancel</th>
                                <th>Payment</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr >
                                <th> 1</th>
                                <td><div className="mask mask-squircle w-12 h-12">
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Avatar Tailwind CSS Component" />
                                </div></td>

                                <td>Watch</td>
                                <td>2000</td>
                                <td>Electronics</td>



                                <td  >

                                    <label htmlFor="Confirmation-modal" className=" btn 
                            
                            text-white   bg-gradient-to-r from-primary to-secondary   border-none">Cancel</label>
                                </td>

                                <td  >

                                    <label htmlFor="Confirmation-modal" className=" btn 

text-white   bg-gradient-to-r from-primary to-secondary   border-none">Payment</label>
                                </td>




                            </tr>


                        </tbody>
                    </table>
                </div>

            </div>

        </div >
    );
};

export default MyOrder;


