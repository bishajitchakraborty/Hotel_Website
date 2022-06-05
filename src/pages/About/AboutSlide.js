import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";
import _ from "lodash";
import {useSelector} from "react-redux";
const AboutSlide = () => {
    const about = useSelector(store => store.about)

    return (
        <>
            {
                about.loading?
                    <>

                    </>:
                    <>
                        <div className={''}>
                            <Swiper
                                loop={true}
                                slidesPerView={3}
                                spaceBetween={30}
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
                                {
                                    !_.isEmpty(about.data)?
                                        !_.isEmpty(about.data[0].aboutPhoto)?
                                            about.data[0].aboutPhoto.map((v,i)=>(
                                                <SwiperSlide key={i}><img src={v.image }/></SwiperSlide>
                                            ))

                                        :<> </>
                                    :<>Content Not Found</>
                                }
                            </Swiper>
                        </div>
                    </>
            }
        </>
    );
};

export default AboutSlide;