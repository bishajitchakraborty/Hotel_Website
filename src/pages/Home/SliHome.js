import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/style1.css";
import pic1 from "../../../src/assets/image/img_15.png"
import pic2 from "../../../src/assets/image/img_8.png"
import pic3 from "../../../src/assets/image/img_9.png"
import pic4 from "../../../src/assets/image/img_10.png"

import { Autoplay, Pagination, Navigation } from "swiper";
const SliHome = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={pic1}/></SwiperSlide>
                <SwiperSlide><img src={pic2}/></SwiperSlide>
                <SwiperSlide><img src={pic3}/></SwiperSlide>
                <SwiperSlide><img src={pic4}/></SwiperSlide>
                <SwiperSlide><img src={pic1}/></SwiperSlide>
                <SwiperSlide><img src={pic1}/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SliHome;