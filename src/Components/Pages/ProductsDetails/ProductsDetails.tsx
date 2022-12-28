/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaStar, FaFacebook, FaInstagram, FaTwitter,  } from "react-icons/fa";
import { useLoaderData } from 'react-router';
const ProductsDetails = () => {
    
    const data:any = useLoaderData();
   
    const { model, price, details, imgUrl, category ,brand} = data;
    
    const initialPicture = imgUrl
    const [picture, setpicture] = React.useState(initialPicture)
    const handel = (e: any) => {
        setpicture(e.target.src)
    }

    return (
        <div>
            <div className='mt-10 bg-white '>
                <div className="container lg:grid lg:grid-cols-2 gap-6 w-[99%] mx-auto">
                    <div>
                        <img src={picture} alt="product" className="w-[80%] mx-auto h-[80%]"></img>
                        <div className="grid grid-cols-5 gap-4 mt-4">
                            <img src="https://i.ibb.co/hsP0XQw/61779b485e784ee5e1620a21-Image-png.png" alt="product2"
                                className="w-full cursor-pointer " onClick={handel}></img>
                            <img src={initialPicture} alt="product2"
                                className="w-full cursor-pointer " onClick={handel}></img>
                            <img src="https://i.ibb.co/nr7jvW9/20191102-191227.jpg" alt="product2"
                                className="w-full cursor-pointer " onClick={handel}></img>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-medium uppercase mb-2">{model}</h2>
                        <div className="flex items-center mb-4">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><i > <FaStar></FaStar></i></span>
                                <span><i > <FaStar></FaStar></i></span>
                                <span><i > <FaStar></FaStar></i></span>
                                <span><i > <FaStar></FaStar></i></span>

                            </div>
                            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-gray-800 font-semibold space-x-2">
                                <span>Availability: </span>
                                <span className="text-green-600">In Stock</span>
                            </p>
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
                        <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                            <p className="text-xl text-primary font-semibold">{price}</p>
                            <p className="text-base text-gray-400 line-through">$55.00</p>
                        </div>

                        <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
                            reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore suscipit, velit
                            consequuntur, voluptate doloremque iure necessitatibus adipisci magnam porro.</p>

                        <div className="pt-4">
                            <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
                            <div className="flex items-center gap-2">
                                <div className="size-selector">
                                    <input type="radio" name="size" id="size-xs" className="hidden"></input>
                                    <label htmlFor="size-xs"
                                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name="size" id="size-sm" className="hidden"></input>
                                    <label htmlFor="size-sm"
                                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name="size" id="size-m" className="hidden"></input>
                                    <label htmlFor="size-m"
                                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name="size" id="size-l" className="hidden"></input>
                                    <label htmlFor="size-l"
                                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                                </div>
                                <div className="size-selector">
                                    <input type="radio" name="size" id="size-xl" className="hidden"></input>
                                    <label htmlFor="size-xl"
                                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                                </div>
                            </div>
                        </div>



                        <div className="mt-4">
                            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                                <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                            <a href="#"
                                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                                <i className="fa-solid fa-bag-shopping"></i> Buy Now
                            </a>
                            <a href="#"
                                className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                                <i className="fa-solid fa-heart"></i> Add to cart
                            </a>
                        </div>
                    

                        <div className="flex gap-3 mt-4 w-[90%] mx-auto">

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

                <div className="container py-16">
                    <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium text-2xl">Product details</h3>
                    <div className="w-full pt-6">
                        <div className="text-gray-600">
                            <p>{details}</p>
                          
                        </div>
                    </div>
                </div>

                {/* 
                    use Review component here
             */}

                <h1 className='text-2xl'> this is a Review </h1>
                {/*  related products start  */}
                <div className="container pb-16">
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Related products</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="bg-white shadow rounded overflow-hidden group">
                            <div className="relative">
                                <img src="https://i.ibb.co/hsP0XQw/61779b485e784ee5e1620a21-Image-png.png" alt="product 1" className="w-[50%] mx-auto"></img>
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                            justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="view product">
                                        <i className="fa-solid fa-magnifying-glass">
                                            cart</i>
                                    </a>
                                    <a href="#"
                                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                                        title="add to wishlist">
                                        <i className="fa-solid fa-heart">
                                            Wish
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <div className="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                        Chair</h4>
                                </a>
                                <div className="flex items-baseline mb-1 space-x-2">
                                    <p className="text-xl text-primary font-semibold">$45.00</p>
                                    <p className="text-sm text-gray-400 line-through">$55.90</p>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex gap-1 text-sm text-yellow-400">
                                        <span><i > <FaStar></FaStar> </i></span>
                                        <span><i > <FaStar></FaStar> </i></span>
                                        <span><i > <FaStar></FaStar> </i></span>
                                        <span><i > <FaStar></FaStar> </i></span>

                                    </div>
                                    <div className="text-xs text-gray-500 ml-3">(150)</div>
                                </div>
                            </div>
                            <a href="#"
                                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
                                Add
                                to cart
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;