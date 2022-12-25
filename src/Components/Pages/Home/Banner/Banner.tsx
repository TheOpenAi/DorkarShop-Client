import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <img src="https://i.ibb.co/DbxGXWw/banner.png" alt="" srcSet="" />

                    </SwiperSlide>
                    <SwiperSlide>

                        <img src="https://i.ibb.co/1LvY7k6/banner2.png" alt="" srcSet="" />

                    </SwiperSlide>

                </Swiper>
            </>

        </div>
    );
};

export default Banner;