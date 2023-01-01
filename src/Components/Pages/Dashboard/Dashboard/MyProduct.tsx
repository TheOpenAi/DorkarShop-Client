import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../context/UserProvider';

const MyProduct = () => {
    const user = useContext(UserContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(
            `http://localhost:5000/sellerorder?email=${user?.user?.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, [user]);
    console.log(products);


    const handelproducts = (id: any) => {
        fetch(`http://localhost:5000/sellerorder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("deleted successfully");
            });
    }

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

                        {
                            // mapo the porduca
                            products && products.map((product: any) => (

                                <tr >
                                    <th> 1</th>
                                    <td><div className="mask mask-squircle w-12 h-12">
                                        <img src={product.imgUrl} alt="Avatar Tailwind CSS Component" />
                                    </div></td>

                                    <td>{product.model}</td>
                                    <td>
                                        <label htmlFor="Confirmation-modal" className=" btn 
                                    
                                    text-white   bg-gradient-to-r from-primary to-secondary   border-none">Click Here</label>
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
                                            <label className="btn bg-gradient-to-r from-red-800 to-red-700 border-none" onClick={() => handelproducts(product._id)} >Delete</label>
                                        </td>
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

export default MyProduct;