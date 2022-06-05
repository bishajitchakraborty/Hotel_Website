import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import _ from "lodash";
import {useSelector} from "react-redux";
const EventSlider = () => {
    const home = useSelector(store => store.home)
    return (
        <>
            {
                home.loading ?
                    <>
                    </>:
                    <>
                        <div className={'event-slider'}>
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
                                            !_.isEmpty(home.data[0].meetingSlider) ?
                                                home.data[0].meetingSlider.map((v, i) => (
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

export default EventSlider;