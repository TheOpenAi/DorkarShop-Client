/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaStar, FaFacebook, FaHandPointRight, FaInstagram, FaTwitter, FaCartPlus, FaMoneyBillAlt } from "react-icons/fa";
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserProvider';
import Modal from './Modal';
import Related from './Related';

const ProductsDetails = () => {
    const userContext = useContext(UserContext);
    const data: any = useLoaderData();

    const { _id, model, price, details, imgUrl, category, brand } = data;


    const [picture, setpicture] = React.useState(null)
    const handle = (e: any) => {
        setpicture(e.target.src)
    }

    const handleAddToCart = (id: any) => {
        console.log(id);
        const cart = {
            model,
            email: userContext?.user?.email,
            name: userContext?.user?.name,
            brand,
            price,
            category,
            imgUrl,
            productsId: _id
        };
        console.log(cart);
        fetch('https://dorkar-shop-server-siamcse.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success(
                        `Your booking is ${model} successful. Please go to Go to Cart and pay for confirm.`
                    );
                }
            })
            .catch(e => console.log(e))
    }
    const [modal, setModaldata] = useState(null);
    const [related, setRelated] = useState([]);
    useEffect(() => {

        fetch(
            `https://dorkar-shop-server-siamcse.vercel.app/products/${data.category}`
        ).then((res) => res.json())
            .then((data) => {
                // filter out the current product
                const filtered = data.filter((item: any) => item._id !== _id);
                // get the first 4 itemsse
                const related = filtered.slice(0, 4);
                setRelated(related);

            });
    }, [data]);
    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="text-xl breadcrumbs w-[100%] mx-auto text-secondary">
                <ul>
                    <li><Link to={'/home'}> Home</Link></li>
                    <li><Link to={`/sinlgecategories/${category}`}> Category</Link></li>
                    <li><Link to={'/home'}> {model} </Link></li>
                </ul>
            </div>
            <div className="w-[310px] h-[5px]   bg-secondary "></div>
            <hr />
            <div className=' mt-5 bg-white  font-sanserif'>
                <div className="container lg:grid lg:grid-cols-2 gap-6 w-[99%] mx-auto">
                    <div>
                        <img src={picture ? picture : imgUrl} alt="product" className=" mx-auto"></img>
                        <div className="grid grid-cols-3 gap-4 mx-10 mt-10">

                            <img src={imgUrl} alt="product2"
                                className="w-full cursor-pointer " onClick={handle}></img>
                            <img src={imgUrl} alt="product2"
                                className="w-full cursor-pointer " onClick={handle}></img>
                            <img src={imgUrl} alt="product2"
                                className="w-full cursor-pointer " onClick={handle}></img>

                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-medium uppercase mb-2">{model}</h2>

                        <div className="space-y-2">

                            <p className="space-x-2">
                                <span className="text-gray-800 font-semibold">Brand: </span>
                                <span className="text-gray-600">{brand}</span>
                            </p>
                            <p className="space-x-2">
                                <span className="text-gray-800 font-semibold">Category: </span>
                                <span className="text-gray-600">{category}</span>
                            </p>
                            <p className="space-x-2">
                                <span className="text-gray-800 font-semibold">SKU: </span>
                                <span className="text-gray-600">BE45VGRT</span>
                            </p>
                        </div>
                        <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4  border-t-[2px] border-t-gray-400 justify-evenly m-5 p-5 ">
                            <div className='flex ' >
                                <p className="text-2xl text-primary font-semibold"> $ {price}</p>
                                <p className="text-base text-gray-400 line-through">$55.00</p>
                            </div>
                            <p className="text-gray-800 font-semibold space-x-2">
                                <span>Availability: </span>
                                <span className="text-green-600">In Stock</span>
                            </p>
                            <div className="flex items-center mb-4">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span><i > <FaStar></FaStar></i></span>
                                    <span><i > <FaStar></FaStar></i></span>
                                    <span><i > <FaStar></FaStar></i></span>
                                    <span><i > <FaStar></FaStar></i></span>


                                </div>
                                <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
                            </div>

                        </div>


                        <p className="mt-4 text-gray-600">{details}</p>
                        <ul className='text-left m-5 font-semibold text-accent'>
                            {data.bullet ? <>

                                {
                                    data.bullet?.map((e: any, i: any) => <li key={i} className="flex items-center p-1">
                                        <FaHandPointRight className='mx-2 text-primary' />  {e}
                                    </li>)
                                }
                            </> : <></>}
                        </ul>

                        <div className="pt-4 lg:w-[30%] mx-auto w-[50%]" >
                            <h3 className="text-sm text-gray-800 font-semibold uppercase mb-1">Size</h3>
                            <div className="flex justify-center items-center gap-2">
                                <div className="size-selector">
                                    <input type="radio" name="size" id="size-xs" className="hidden"></input>
                                    <label htmlFor="size-xs"
                                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 hover:bg-primary">XS</label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name="size" id="size-sm" className="hidden"></input>
                                    <label htmlFor="size-sm"
                                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 hover:bg-primary">S</label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name="size" id="size-m" className="hidden"></input>
                                    <label htmlFor="size-m"
                                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 hover:bg-primary">M</label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name="size" id="size-l" className="hidden"></input>
                                    <label htmlFor="size-l"
                                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 hover:bg-primary">L</label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name="size" id="size-xl" className="hidden"></input>
                                    <label htmlFor="size-xl"
                                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 hover:bg-primary">XL</label>
                                </div>
                            </div>
                        </div>



                        {/* <div className="mt-4">
                            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                                <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                            </div>
                        </div> */}

                        <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5 items-center justify-center">

                            < button onClick={() => setModaldata(data)}
                                className=" text-xl text-white  right-2.5 bottom-2.5
                             bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l focus:ring-4 font-medium rounded-lg  px-4 py-2 2  uppercase 
                             flex items-center gap-2 hover:bg-transparent  transition">
                                <FaMoneyBillAlt> </FaMoneyBillAlt>
                                <label htmlFor="my-modal">Book Now</label></button>


                            <button onClick={() => handleAddToCart(_id)}
                                className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                                <i className='text-xl'> <FaCartPlus></FaCartPlus></i> Add to cart
                            </button>
                        </div>


                        <div className="flex gap-3 mt-4 w-[50%] mx-auto">

                            <h1 className='text-xl'>  Share on </h1>
                            <a href="#"
                                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                                <i className="fa-brands fa-facebook-f"> <FaFacebook></FaFacebook></i>
                            </a>
                            <a href="#"
                                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                                <i className="fa-brands fa-twitter"> <FaTwitter></FaTwitter></i>
                            </a>
                            <a href="#"
                                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                                <i className="fa-brands fa-instagram"> <FaInstagram></FaInstagram></i>
                            </a>

                        </div>


                    </div>
                </div>

                {/* <div className="container py-16">
                    <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium text-2xl">Product details</h3>
                    <div className="w-full pt-6">
                        <div className="text-gray-600">
                            <p>{details}</p>

                        </div>
                    </div>
                </div> */}

                {/* 
                    use Review component here
             */}


                {/* <h1 className='text-2xl'> this is a Review </h1> */}

                <div className="container mx-auto lg:p-16">
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Related products</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
                        {
                            related.map(product => <Related product={product} setpicture={setpicture}></Related>)

                        }

                    </div>

                </div>
            </div>
            {
                modal && <Modal modal={modal} setModaldata={setModaldata}></Modal>
            }
        </div>
    );
};

export default ProductsDetails;