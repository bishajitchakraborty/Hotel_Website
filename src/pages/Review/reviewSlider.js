import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {useDispatch, useSelector} from "react-redux";
import {getReviewSlider} from "../../Services/ReviewSlider/ReviewSliderAction";
import _ from "lodash"
import {Skeleton} from "@mui/material";
const ReviewSlider = () => {
    const reviewSlider = useSelector(store=>store.reviewSlider)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReviewSlider())
    }, [])
    return (
        <>
            {
                reviewSlider.loading?
                    <>
                        <div className={'review-slider'}>
                            <Skeleton className={'h-96 w-full'}/>
                        </div>

                    </>:
                    <>
                        <div className={'review-slider'}>
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
                                    !_.isEmpty(reviewSlider.data) ?
                                        reviewSlider.data.map((v, i) => (
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
         </>

    );
};

export default ReviewSlider;