import React, {useEffect} from "react";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import {useDispatch, useSelector} from "react-redux";
import {getPhoto} from "../../Services/Myphoto/MyphotoAction";
import _ from "lodash";
import {Skeleton} from "@mui/material";

const Myphoto = () => {
    const myphoto = useSelector(store=>store.myphoto)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPhoto())
    }, [])
    return (
        <>
            {
                myphoto.loading?
                    <>
                        <div className={'sm:w-3/5 mx-auto  text-justify mb-10 sm:p-0 p-2'}>
                            <Skeleton className={'h-96 w-full'}/><br/>
                            <Skeleton className={'h-36 w-full'}/><br/>
                            <Skeleton className={'h-24 w-full'}/><br/>
                            <Skeleton className={'h-28 w-full'}/><br/>
                            <Skeleton className={'h-20 w-full'}/>
                        </div>

                    </>:
                    <>
{/*<--------------------------------------------------Start Gallery  Protion  For Hotel---------------------------------------------------------->*/}
                        <div  className={'sm:w-3/5 mx-auto  text-justify mb-10 sm:p-0 p-2'}>
                            <h2 className={'py-10 text-4xl '}><span className={'border-b-8 border-blue-900 '}>Gallery</span></h2>
                            <div className={"custom-gallery grid grid-cols-4 gap-4"}>
                                <Gallery>
                                    {
                                        !_.isEmpty(myphoto.data)?
                                            myphoto.data.map((v,i) => (
                                                    <Item
                                                        original={v.image}
                                                        thumbnail={v.image}
                                                        width="1024"
                                                        height="768"
                                                        key={i}
                                                    >
                                                        {({ ref, open }) => (
                                                            <img  ref={ref} onClick={open} src={v.image} />
                                                        )}
                                                    </Item>
                                                ))
                                        :<>Content Not Found</>
                                    }
                                </Gallery>
                            </div>
                        </div>
{/*<--------------------------------------------------End Gallery  Protion  For Hotel---------------------------------------------------------->*/}
                    </>

            }
        </>

    );
};

export default Myphoto;