import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
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
                                    <td>{product.transectionId
                                    }</td>

                                    <td>

                                        {

                                            product?.paid === true &&
                                            <h1>Paid</h1>


                                        }


                                        {

                                            product?.paid === false &&
                                            <h1>Pending</h1>


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


