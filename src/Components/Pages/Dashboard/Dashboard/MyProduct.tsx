import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../context/UserProvider';
import trash from "../../../../Assets/icons8-trash-can-50.png"
import { FaTrash, FaTrashAlt } from 'react-icons/fa'

const MyProduct = () => {
    const user = useContext(UserContext);

    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["products", user?.user?.email],
        queryFn: async () => {
            return fetch(
                `https://dorkar-shop-server-siamcse.vercel.app/sellerorder?email=${user?.user?.email}`
            ).then((res) => res.json());
        },
    });


    const handleProducts = (id: any) => {
        fetch(`https://dorkar-shop-server-siamcse.vercel.app/sellerorder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {

                refetch()
                toast.success("Deleted Successfully");
            });
    }

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
                        my products
                    </li>
                </ul>
            </div>
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

                        {
                            // mapo the porduca
                            data && data.map((product: any) => (

                                <tr >
                                    <th> 1</th>
                                    <td><div className="mask mask-squircle w-12 h-12">
                                        <img src={product.imgUrl} alt="Avatar Tailwind CSS Component" />
                                    </div></td>

                                    <td>{product.model}</td>
                                    <td>
                                        {
                                            product?.paid !== "true" &&
                                            <label htmlFor="Confirmation-modal" className=" btn 
                                    
                                    text-white   bg-gradient-to-r from-primary to-secondary   border-none">Click Here</label>

                                        }

                                    </td>

                                    <td>

                                        {

                                            product?.paid === "true" &&
                                            <h1>Already Sold</h1>


                                        }


                                        {

                                            product?.paid !== "true" &&
                                            <h1>Available</h1>


                                        }





                                    </td>
                                    <td>
                                        <td>
                                            <FaTrashAlt onClick={() => handleProducts(product._id)} className='text-red-600 text-2xl cursor-pointer'></FaTrashAlt>

                                            {/* <img className='cursor-pointer' onClick={() => handelproducts(product._id)} src={trash} alt="" /> */}

                                        </td>
                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>





        </div >
    );
};

export default MyProduct;
