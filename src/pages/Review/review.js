import React, {useEffect, useState} from 'react';
import Rating from '@mui/material/Rating';
import ReviewSlider from "./reviewSlider";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {getReview, saveReview} from "../../Services/Review/ReviewAction";
import _ from "lodash";
import ReviewCard from "./reviewCard";
import {Pagination} from "@mui/material";



const limit=2;
const Review = () => {
    const dispatch = useDispatch()
    const reviews = useSelector(store => store.review);
    // const reviewsPaginated = useSelector(store => store.reviewPaginated);

    const [review, setReview] = useState({user: null, comment: "", rating: null})
    const [offset, setOffset] = useState(0)

    function handleComment() {
        if (review.rating === null) {
            return toast.error("Please Give Product Rating.", {theme: "colored"})
        }
        if (review.comment === "") {
            return toast.error("Please Leave Your Comment.", {theme: "colored"})
        }
        // if (review.user === null){
        //     return toast.error("Something went wrong! Please try again.", {theme: "colored"})
        // }

        saveReview(review).then(response=>{
            if (response.status ===201){
                getReviewPaginated()
                setReview({...review, comment: "", rating: null})
                toast.success("Review successfully posted",{theme:"colored"})
            }
            else toast.error("Something want wrong!",{theme:"colored"})
        }).catch(reason => {
            toast.error(reason,{theme:"colored"})
        })

    }
    function getReviewPaginated(){
        dispatch(getReview(limit, offset))
    }

    useEffect(()=>{
        getReviewPaginated()
    },[offset])


    return (
        <div>
            {/*{*/}
            {/*    reviews.loading?*/}
            {/*        <>*/}
            {/*            <div className={'md:w-3/5 mx-auto my-10 md:p-0 p-2'}>*/}
            {/*                <Skeleton className={'h-16 w-full'}/><br/>*/}
            {/*                <Skeleton className={'h-16 w-full'}/><br/>*/}
            {/*                <Skeleton className={'h-16 w-full'}/><br/>*/}
            {/*            </div>*/}

            {/*        </>:*/}
            {/*        <>*/}
                        <section className={'md:w-3/5 mx-auto border-b-4 border-blue-900 md:p-0 p-2'}>
                            <ReviewSlider/>
                        </section>

                        <section className={'md:w-3/5 mx-auto my-10 md:p-0 p-2'}>
                            <h2 className={'text-2xl text-black '}>GUEST REVIEWS</h2>
                            <p className={'text-sm border-b pb-3'}>Read what guests had to say on their online satisfaction survey, completed after a confirmed stay</p>
                                <div className={'flex flex-wrap pt-10 pb-4 border-b'}>
                                    <div className={'sm:w-1/6 w-full pt-4'}>
                                        <h1 className={'text-4xl'}>4.60<span
                                            className={'text-2xl text-gray-400'}>/5</span></h1>
                                        <Rating
                                            name="simple-controlled"
                                            size="large"
                                            defaultValue={5}
                                            readOnly

                                            // value={5}
                                            // precision={0.5}
                                        />

                                        <p className={'text-xs text-gray-400'}>27 Ratings</p>
                                    </div>
                                    <div className={'sm:w-3/6  w-full pl-12'}>
                                        {[5, 4, 3, 2, 1].map((v, i) => (
                                            // <div key={`ratting-${i}`} className={'flex'}>
                                            <div key={i} className={'flex'}>
                                                <Rating
                                                    name="simple-controlled"
                                                    // value={v}
                                                    // precision={0.5}
                                                    defaultValue={5}
                                                    readOnly


                                                />
                                                <div className={'sm:w-3/4 flex pl-0  ml-1 align-items-center'}>
                                                    <input type="range" value="0"/><h4
                                                    className={'text-xs ml-2'}>3</h4>
                                                    <div id="h4-container barflex">
                                                        <div id="h4-subcontainer"></div>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                        }

                                    </div>
                                </div>


                            <div className={'border-gray-400 py-4 w-full my-10 md:p-0 p-2'}>
                                <h2 className={'text-2xl border-b border-gray-200 pb-4'}>Traveler Reviews</h2>
                                {/*{*/}
                                {/*    auth?*/}
                                {/*        <>*/}
                                            <section className={'w-full'}>
                                                <div className={'flex flex-col items-end py-5'}>
                                                    <Rating
                                                        value={review.rating}
                                                        name="simple-controlled"
                                                        size="large"
                                                        precision={1}
                                                        onChange={(event, newValue) => {
                                                            setReview({...review, rating: newValue})
                                                        }}
                                                    />
                                                    <p>Rating This Hotel</p>
                                                </div>
                                                <input
                                                    onChange={e => setReview({...review, comment: e.target.value})}
                                                    value={review.comment} id={"product-comment"}
                                                    type="text" className={'md:w-5/6 w-full pl-2 border border-r-0 border-blue-700 py-3 px-3 rounded-l-md focus:ring-blue-700 focus:border-blue-700'}
                                                    placeholder={'Comment '} htmlFor="comment"/>
                                                <button
                                                    onClick={handleComment}
                                                    className={'w-1/6 py-3 bg-blue-700 border border-blue-700 text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-blue-700 transition'}>Submit
                                                </button>
                                            </section>
                                {/*        </>:*/}
                                {/*        <>*/}

                                {/*        </>*/}

                                {/*}*/}

                            </div>
                            <>
                                {
                                    reviews.loading?
                                            <>

                                            </>:
                                            <>
                                                {
                                                    !_.isEmpty(reviews.data) ?
                                                        reviews.data.map((v, key) => (
                                                            <ReviewCard
                                                                // key={`rating-${key}`}
                                                                key={key}
                                                                comment={v.comment}
                                                                // username={v.email}
                                                                rating={v.rating}/>
                                                        ))
                                                        :
                                                        <></>
                                                }
                                            </>
                                }

                            </>

                                <div className={'flex justify-center mt-4'}>
                                    {/*{*/}
                                    {/*    !_.isEmpty(reviews.data)?*/}
                                            <Pagination color="primary"/>

                                    {/*}*/}

                                </div>
                        </section>




            {/*        </>*/}
            {/*}*/}

        </div>
    );
};

export default Review;