import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCatering} from "../../Services/Catering/CateringAction";
import _ from "lodash";
import {Skeleton} from "@mui/material";
import CateringSlider from "./cateringSlider";


const Catering = () => {
    const catering = useSelector(store=>store.catering)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCatering())

    }, [])
    return (
        <div>
            {
                catering.loading?
                <>
                    <div className={'flex sm:w-3/5 w-full mx-auto relative  h-96'}>
                        <Skeleton className={'h-96 w-full'}/>
                    </div>
                    <div className={'sm:w-3/5 w-full mx-auto sm:p-0 p-2 mb-8'}>
                        <Skeleton className={'h-24 w-full'} />
                    </div>
                    <div className={'sm:w-3/5 w-full mx-auto sm:p-0 p-2 mb-8'}>
                        <Skeleton className={'h-24 w-full'} />
                    </div>
                    <div className={'sm:w-3/5 w-full mx-auto sm:p-0 p-2 mb-8'}>
                        <Skeleton className={'h-24 w-full'} />
                    </div>

                </>:
                <>
                    <section className={'w-full sm:p-0 p-2'}>
                        <div className={' w-full mx-auto relative object-cover pb-16 items-center  justify-center '}>
                            {/*style={{backgroundImage: `url(${img_5})`}}*/}
                            <CateringSlider/>
                        </div>
                    </section>
{/*<--------------------------------------------------Start Catering  Protion  For Hotel---------------------------------------------------------->*/}
                    <div className={'sm:w-3/5 w-full mx-auto sm:p-0 p-2 mb-8'}>
                        <div className={'mt-16 '}>
                            <p className={'text-sm text-center pb-4 text-gray-500'}>DINING AT XYZ DHAKA</p>
                            <h1 className={'sm:text-4xl text-xl text-center pb-16'}>Enjoy Food and Drinks Offered at XYZ Dhaka</h1>
                            <h2 className={'text-center sm:text-xl text-sm text-gray-500 pb-6'}>AT THIS HOTEL</h2>
                        </div>
                        <div>
                            {
                                !_.isEmpty(catering.data)?
                                    !_.isEmpty(catering.data[0].foods)?
                                        catering.data[0].foods.map((v,i)=>
                                            <div className={'bg-white-500 shadow-lg shadow-white-500/50 p-8 rounded-xl '} key={i}>
                                                <h2 className={'text-xl  pb-2'}>{v.tittle}</h2>
                                                <p className={'text-xs pb-2'}>{v.subTittle}</p>
                                                <div className={'pb-6 text-sm'} dangerouslySetInnerHTML={{__html:v.shortDescription}} />


                                                <div className={'flex pb-10'}>
                                                   <span className="material-icons">
                                                        watch_later
                                                   </span>
                                                    <h4 className={'px-4'}>{v.day}</h4>
                                                    <h4>{v.time}</h4>
                                                </div>
                                            </div>
                                    ):<> </>
                                :<>Content Not Found</>
                            }
                        </div>
                    </div>
{/*<--------------------------------------------------End Catering  Protion  For Hotel---------------------------------------------------------->*/}
                </>
                }
        </div>
    );
};

export default Catering;