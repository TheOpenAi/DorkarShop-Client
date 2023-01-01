import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../context/UserProvider';

const MyOrder = () => {
    const user = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    //    useEffect(() => {
    //     fetch(
    //         `http://localhost:5000/sellerorder?email=${user?.user?.email}`
    //       )
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProducts(data);
    //         });
    //    }, [user]);
    // react query 
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["orders", user?.user?.email],
        queryFn: () => {
            return fetch(
                `http://localhost:5000/orders?email=${user?.user?.email}`
            ).then((res) => res.json());
        },
    });
    console.log(data);



    return (


        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <Link to={'/home'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            dashboard
                        </Link>
                    </li>
                    <li>

                        my order
                    </li>
                </ul>
            </div>
            <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>My Orders </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Invoice Id</th>



                            <th>Payment</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            // mapo the porduca
                            data && data.map((product: any) => (

                                <tr >


                                    <td>{product.model}</td>
                                    <td>{product.price}</td>
                                    <td className='text-gray-500'>{product.transectionId
                                    }</td>

                                    <td>

                                        {

                                            product?.paid === true &&
                                            <h1 className='text-green-700 font-extrabold'>Paid</h1>


                                        }


                                        {

                                            product?.paid === false &&
                                            <h1 className='text-yellow-300 font-extrabold'>Pending</h1>


                                        }





                                    </td>




                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>





        </div>
    );
};

export default MyOrder;
