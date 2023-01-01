/* eslint-disable jsx-a11y/no-redundant-roles */
import Aos from 'aos';
import React, { useState } from 'react';
import { FaRegHeart, FaExchangeAlt, FaQuestion, FaDollarSign } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./featured.css"

// import required modules
import { FreeMode, Pagination } from "swiper";
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';

const FeaturedProducts = () => {
    const [item, setItem] = useState<any>({});
    const [dataloading, setDataLoading] = useState<boolean>(true)
  const {category, bullet, imgUrl
  } = item;

    Aos.init();
    
    const { data = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const category = "electronics";
            const res = await fetch(`https://dorkar-shop-server-siamcse.vercel.app/products/${category}`);
            const data = await res.json();
            setItem(data[0])
            setDataLoading(false)
            return data;
        }
    })

    if (isLoading && dataloading) {
        return <Loading />
    }
    console.log('I', item);
    console.log('P', data);

    return (
        <div>

            <div className="bg-gray-100 py-20 w-full overflow-hidden">
                <div className="lg:w-3/4 m-auto ">
                    <div className="m-auto text-center lg:w-8/12 xl:w-7/12 relative overflow-hidden">
                        <h2 className="text-2xl text-accent text-shadow font-bold md:text-4xl">Our Featured Products. We Provide The Best Deal In Town</h2>
                        {/* <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/pages/ai/person-wand.png?fbclid=IwAR1B09MGqWQuOJk6mU3KTWld1Fs99OoDX3_QkULEFLSG8U4476tTkWi4JXc" alt=""
                            className='w-[50%] 
                       left-[40%]
                     relative'
                         data-aos='fade-up' 
                         data-aos-duration='1000'
                            data-aos-delay='80'
                         /> */}
                    </div>
                    <div className=" relative mt-12 m-auto items-center justify-center md:flex md:space-y-0 md:-space-x-4">
                        <div className="relative mx-4 md:w-3/12 md:mx-0 z-10 " data-aos='fade-right'

                            data-aos-duration='1000'
                            data-aos-delay='80'

                        >
                            <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-gray-300 shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110">

                            </div>

                            <div className="relative p-6 space-y-6">
                                <h2 className="text-accent  text-2xl font-medium py-2 border-b border-gray-400">{category}</h2>
                                <div
                                >
                                    <div className=" bg-base-100 cursor-pointer" >
                                        <div className="">
                                            <img src={imgUrl} alt="" className='w-full' />

                                            <div className='px-5 pt-3 bg-gray-300'>
                                                <ul>
                                                   {
                                                    bullet?.map((e:any, i:any) => <li key={i}>
                                                        {e}
                                                    </li>)

                                                   }
                                                </ul>


                                            </div>

                                        </div>
                                    </div>

                                </div>


                                <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-gradient-to-r from-primary to-secondary  focus:secondary">
                                    <span className="text-white font-semibold">
                                        Send us an email
                                    </span>
                                </button>
                            </div>
                        </div>






                        {/* put this section under swiper */}


                        <div className="relative w-full md:w-9/12" data-aos='fade-left'
                            data-aos-duration='1000'
                            data-aos-delay='100'
                        >
                            <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"></div>

                            <>
                                <Swiper
                                    breakpoints={{
                                        320: { slidesPerView: 1, spaceBetween: 30 },
                                        480: { slidesPerView: 2, spaceBetween: 30 },
                                        768: { slidesPerView: 2, spaceBetween: 30 },
                                        1024: { slidesPerView: 3, spaceBetween: 30 },
                                        1524: { slidesPerView: 4, spaceBetween: 30 },
                                    }}
                                    spaceBetween={30}
                                    freeMode={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[FreeMode, Pagination]}
                                    className="mySwiper"
                                >
                                    <div className="relative p-6 m-5 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                                        {
                                            data.map((e: any) => <SwiperSlide
                                                key={e._id}>
                                                <div className=" bg-base-100 cursor-pointer shadow-lg my-5 hover:shadow-accent" >
                                                    <div className="">
                                                        <img src={e?.imgUrl} alt='model' />

                                                        <div className='px-5'>
                                                            <div className='flex justify-between'>
                                                                <h2 className="text-accent  text-2xl font-medium py-2">{e?.model}</h2>

                                                            </div>
                                                            <h2 className="text-left text-gray-500 text-xl">BDT {e?.price}</h2>
                                                            <hr />
                                                            <div className='flex justify-between items-center py-3'>
                                                                <button className='bg-primary rounded px-2'>See Details</button>
                                                                <div className='flex items-center text-accent '>
                                                                    <div className='border-secondary p-1'>

                                                                        <FaRegHeart className='text-xl text-red-500 mr-2' />
                                                                    </div>

                                                                    <div className='border-2 rounded-full border-secondary p-1'>

                                                                        < FaExchangeAlt className='text-secondary' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </SwiperSlide>)
                                        }


                                    </div>
                                </Swiper>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;