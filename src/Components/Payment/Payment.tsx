import React from 'react';
import Footer from '../Pages/Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Payment = () => {

    const location = useLocation();
    // console.log(location.search)
    const query = new URLSearchParams(location.search);
    const transectionId = query.get("transectionId");
    // console.log(transectionId);


    const [order, setOrder]: any = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/orders/by-transaction-id/${transectionId}`)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [transectionId])

    console.log(order);




    return (
        <div>



            <div className=" ">
                <h1>{order.price}</h1>
                <div className="bg-white p-6  md:mx-auto">
                    <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                        <path fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg>
                    <div className="text-center">

                        <h1>{order.price}</h1>
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                        <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
                        <p> Have a great day!  </p>
                        <div className="py-10 text-center">
                            <a href="/" className=" text-white font-semibold py-3 px-6 text-center rounded-xl transition bg-gradient-to-r from-primary to-secondary  focus:secondary">
                                GO BACK TO HOME
                            </a>



                        </div>
                    </div>
                </div>
            </div>
            <div>


                <div>

                    <div>
                        <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>Order Summery</h1>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>


                                        <th>Invoice ID</th>
                                        <th>Product Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr  >


                                        <td>{order._id}</td>
                                        <td>{order.model}</td>
                                        <td>{order.category}</td>
                                        <td>{order.price}</td>
                                        <td>
                                            Paid
                                        </td>

                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>


            <Footer></Footer>
        </div>
    );
};

export default Payment;