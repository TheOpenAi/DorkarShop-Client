/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable react/style-prop-object */
// import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FaQuoteLeft } from "react-icons/fa";
// // import "./testemonial.css"
// // Import Swiper styles
// import "swiper/css";

// import "swiper/css/pagination";
// // import Testimonials from './Testimonials';
// // import required modules
// import { Pagination } from "swiper";

// const Testimonials = () => {
//     return (
//         <div className='mt-24'>
//             <h2 className='text-4xl text-center font-bold'>Testimonials</h2>
//             <h3 className='text-2xl text-center'>What Client Say </h3>
//             <>

//                 <div className='overflow-hidden'>
//                     <div className="block rounded-lg shadow-lg bg-white w-full mx-auto md:w-3/5 my-10 p-10">
//                         <div className="overflow-hidden rounded-t-lg h-28 bg-[#9d789b] "></div>
//                         <div className="w-24 -mt-12 overflow-hidden  border-2 border-white rounded-full mx-auto bg-white">
//                             <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
//                         </div>
//                         <div className="p-6">
//                             <h4 className="text-2xl font-semibold mb-4">Maria Smantha</h4>
//                             <hr />
//                             <p className="mt-4">
//                                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
//                                 </svg>
//                                 Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className=''>
//                     <div className="block rounded-lg shadow-lg bg-white w-full mx-auto md:w-3/5 my-10 p-10">
//                         <div className="overflow-hidden rounded-t-lg h-28 bg-[#9d789b] "></div>
//                         <div className="w-24 -mt-12 overflow-hidden  border-2 border-white rounded-full mx-auto bg-white">
//                             <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
//                         </div>
//                         <div className="p-6">
//                             <h4 className="text-2xl font-semibold mb-4">Maria Smantha</h4>
//                             <hr />
//                             <p className="mt-4">
//                                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                     <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
//                                 </svg>
//                                 Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//             </>
//         </div >
//     );
// };

// export default Testimonials;
import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom';


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
    let [categories] = useState({
        Recent: [

            {
                _id: "63ac7363bb5a39c81433154d",
                category: "womens",
                model: "Leather Jacket",
                brand: "Lives",
            },
            {
                _id: "63ac7363bb5a39c81433154a",
                category: "shoes",
                model: "zoom X",
                brand: "Nike",
            },
        ],
        Popular: [
            {
                _id: "63ac7363bb5a39c81433154a",
                category: "shoes",
                model: "zoom X",
                brand: "Nike",
            },
        ],
        Trending: [
            {
                _id: "63ac7363bb5a39c81433154d",
                category: "womens",
                model: "Leather Jacket",
                brand: "Lives",
            },
        ],
    })

    useEffect(() => {
        fetch("https://dorkar-shop-server-siamcse.vercel.app/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);
    ;
    return (
        <div className="w-11/12 max-w-md px-2 py-16 sm:px-0 mx-auto">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-black-900/20 p-1  ">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-black shadow shadow-black hover:bg-blue-60 hover:text-white'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl bg-gray p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}>
                            <ul >
                                {posts.map((post) => (
                                    <li
                                        key={post._id}
                                        className="relative rounded-md p-3 my-2 border border-gray-400 hover:bg-gray-100 hover:scale-110 ease-linear transition-all duration-300"
                                    >
                                        <h3 className="text-xl font-medium leading-5 text-center">
                                            {post.model}
                                        </h3>

                                        <ul className="mt-1 flex  space-x-1 text-xs font-normal leading-4 text-gray-500 justify-center" >
                                            <li>{post.category}</li>
                                            <li>&middot;</li>
                                            <li>{post.brand}</li>
                                        </ul>

                                        <Link to={`/productsdetails/${post._id}`}

                                            className={
                                                classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                )}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}