import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import _ from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {getCateringSlider} from "../../Services/Catering/CateringAction";
import {Skeleton} from "@mui/material";
const CateringSlider = () => {
    const cateringSlider = useSelector(store => store.cateringSlider)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCateringSlider())
    }, [])
    return (
        <div>
            {
                cateringSlider.loading?
                    <>
                        <div className={'catering-slider'}>
                             <Skeleton className={'h-140'}/>
                        </div>


                    </>:
                    <>
                        <div className={'catering-slider '}>
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
                                className="mySwiper h-124 "
                            >


                                {
                                    !_.isEmpty(cateringSlider.data) ?
                                        cateringSlider.data.map((v, i) => (
                                                <SwiperSlide key={i}>
                                                    <img  src={v.image}/>
                                                </SwiperSlide>
                                            ))
                                        : <>Content Not Found</>
                                }
                            </Swiper>
                        </div>
                    </>

            }

        </div>
    );
};

export default CateringSlider;