import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../../assets/css/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import pic1 from "../../../src/assets/image/img_15.png"
import pic2 from "../../../src/assets/image/img_8.png"
import pic3 from "../../../src/assets/image/img_9.png"
import pic4 from "../../../src/assets/image/img_10.png"
const AboutSlide = () => {
    return (
        <div className={''}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={pic1}/></SwiperSlide>
                <SwiperSlide><img src={pic2}/></SwiperSlide>
                <SwiperSlide><img src={pic3}/></SwiperSlide>
                <SwiperSlide><img src={pic4}/></SwiperSlide>
                <SwiperSlide><img src={pic3}/></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default AboutSlide;