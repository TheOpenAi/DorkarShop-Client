import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaTrashAlt } from 'react-icons/fa';

const AllSeller = () => {
    const [sellers, setSellers] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://dorkar-shop-server-siamcse.vercel.app/users?role=Seller')
            .then(res => res.json())
            .then(data => {
                setSellers(data);
            })
    }, []);
    console.log(sellers);
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        All Sellers
                    </li>
                </ul>
            </div>
            <h1 className='text-4xl text-blue-900 font-bold text-center my-5'>All Sellers</h1>

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
                        {
                            sellers?.map((seller, i) => <tr  >
                                <th>{i + 1}</th>
                                <td><div className="mask mask-squircle w-12 h-12">
                                    <img src="https://static.vecteezy.com/system/resources/previews/004/773/704/original/a-girl-s-face-with-a-beautiful-smile-a-female-avatar-for-a-website-and-social-network-vector.jpg" alt='' />
                                </div></td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <label htmlFor="Confirmation-modal" className="btn 
                                text-white bg-gradient-to-r from-primary to-secondary   border-none">Verify</label>
                                </td>
                                <td>

                                    <FaTrashAlt className=' border-none text-red-600 text-2xl cursor-pointer'></FaTrashAlt>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>





        </div>
    );
};

export default AllSeller;