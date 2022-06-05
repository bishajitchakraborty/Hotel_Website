import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/style.css";
import {Autoplay, Pagination, Navigation} from "swiper";
import {useSelector} from "react-redux";
import _ from "lodash";
import {Skeleton} from "@mui/material";

const HomeSlider = () => {
    const home = useSelector(store => store.home)
    return (
        <>
            {
                home.loading ?
                    <>
                        <div className={'home-slider'}>
                            <Skeleton className={'h-72 w-full'}/>
                        </div>

                    </> :
                    <>
                        <div className={'home-slider '}>
                            <Swiper
                                loop={true}
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
                                className="mySwiper h-96 "
                            >


                                {
                                    !_.isEmpty(home.data) ?
                                        !_.isEmpty(home.data[0].slider) ?
                                            home.data[0].slider.map((v, i) => (
                                                <SwiperSlide>
                                                    <img key={i} src={v.image}/>
                                                </SwiperSlide>
                                            ))

                                            : <>Content Not Found</>
                                        : <>Content Not Found</>
                                }
                            </Swiper>
                        </div>
                    </>
            }
        </>

    );
};

export default HomeSlider;