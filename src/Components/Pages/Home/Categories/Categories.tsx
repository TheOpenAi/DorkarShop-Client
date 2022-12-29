import Aos from "aos";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import "./categories.css";
// import Category from './Category';

const Categories = () => {
  Aos.init();
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dorkar-shop-server-siamcse.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  console.log(categories);
  return (
    <div>
      <div className=" items-center justify-center h-auto bg-white pt-24">
        <div className="flex flex-col">
          <div
            className="flex flex-wrap justify-center text-center mb-10"
            data-aos="fade-right"
          >
            <div className="w-full  lg:w-6/12 px-10">
              <h1 className=" text-4xl text-accent font-bold mb-8">
                All Available{" "}
                <span className="text-secondary"> Categories</span>
              </h1>
              <p className="text-gray-500 font-bold">
                DorkarShop has been the best selling and most loved Open cart
                theme since first launch in 2013. Tried and tested by over 20K
                people, DorkarShop is the bes on the market today
              </p>
            </div>
          </div>

          <div className="">
            <>
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                {categories.map((category, idx) => (
                  <SwiperSlide>
                    <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 m-10 px-4">
                      <Link
                        key={category._id}
                        to={`/sinlgecategories/${category?.title}`}
                      >
                        <div
                          className="card w-52 lg:w-64 bg-base-100 shadow-lg shadow-primary"
                          data-aos="fade-up"
                        >
                          <div className="relative text-center">
                            <img
                              src={category?.imgUrl}
                              alt=""
                              className="h-full rounded-t-xl"
                            />
                            <h2 className="capitalize font-semibold text-lg text-accent py-1">
                              {category?.title}
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
