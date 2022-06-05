import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {getReservationSlider} from "../../Services/Reservation/ReservationAction";
import {Skeleton} from "@mui/material";
const ReservationSlider = () => {
    const reservationSlider = useSelector(store=>store.reservationSlider)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReservationSlider())
    }, [])
    return (
        <div>
            {
                reservationSlider.loading?
                    <>
                        <div className={'reservation-slider'}>
                           <Skeleton className={'h-72 w-full'}/>
                        </div>

                    </>:
                    <>
                            <div className={'reservation-slider'}>
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
                                    className="mySwiper "
                                >
                                    {
                                        !_.isEmpty(reservationSlider.data) ?
                                            reservationSlider.data.map((v, i) => (
                                                <SwiperSlide key={i}>
                                                    <img  src={v.image}/>
                                                </SwiperSlide>
                                            ))
                                            : <>Content Not Found</>
                                    }
                                    {/*<SwiperSlide>*/}
                                    {/*    <img src={img_5}/>*/}
                                    {/*</SwiperSlide>*/}

                                </Swiper>
                            </div>
                    </>
            }

        </div>
    );
};

export default ReservationSlider;