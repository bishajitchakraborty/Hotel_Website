import React, {useEffect} from 'react';
import about1 from '../../../src/assets/image/about.jpg'
import video from '../../../src/assets/video/video_1.mp4'
import AboutSlide from "./AboutSlide";
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../../Services/About/AboutAction";
import _ from "lodash";

const About = () => {
    const about = useSelector(store=>store.about)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAbout())

    }, [])
    return (
        <div>
            {
                about.loading?
                    <>

                    </>:
                    <>
                        <div className={''}>
{/*<--------------------------------------------------Start About Picture Protion  For Hotel-------------------------------------------------------->*/}
                            <section className={'w-full '}>
                                <div
                                    className={'flex w-full relative sm:h-140 h-72 object-cover items-center  justify-center '}
                                    style={{backgroundImage: `url(${about1})`}}>
                                    <div className={'w-1/2 sm:pl-12 '}>
                                        <h4 className={'font-semibold text-my-primary sm:text-4xl uppercase text-gray-100 text-2xl text-center'}>About
                                            Santoor</h4>
                                    </div>
                                </div>

                            </section>
{/*<--------------------------------------------------End About  Picture Protion  For Hotel--------------------------------------------------------->*/}




{/*<--------------------------------------------------Start About  Protion  For Hotel-------------------------------------------------------------->*/}
                            <div className={'flex sm:w-3/5 w-full h-auto pb-10 flex flex-wrap mx-auto  text-justify sm:p-0 p-2 '}>
                                <div className="flex w-full mt-16">
                                    <h1 className="text-xl  text-black">
                                        About XYZ Hotel Dhaka
                                    </h1>
                                </div>
                                {
                                    !_.isEmpty(about.data)?
                                        <div className={' w-full text-gray-500 mt-4'} dangerouslySetInnerHTML={{__html:about.data[0].description}}>

                                        </div>
                                    :<>Content Not Found</>
                                }
                            </div>
{/*<--------------------------------------------------End About  Protion  For Hotel-------------------------------------------------------------->*/}



{/*<--------------------------------------------------Start Location  Protion  For Hotel--------------------------------------------------------->*/}
                            <section className={'sm:w-3/5  mx-auto bg-white text-justify my-10 sm:p-0 p-2'}>
                                <h2 className="text-xl  text-black pb-4">Location</h2>
                                <div className={'border h-124 '}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29192.707637170097!2d90.4107785!3d23.850992549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6652c0b863d%3A0xc404e4ca02255b30!2sKawlar%20Bazar!5e0!3m2!1sen!2sbd!4v1645253355034!5m2!1sen!2sbd"
                                        className={'h-124 w-full'}   allowFullScreen="" loading="lazy">
                                    </iframe>
                                </div>
                            </section>
{/*<--------------------------------------------------End Location  Protion  For Hotel---------------------------------------------------------->*/}




{/*<--------------------------------------------------Start About Slider  Protion  For Hotel---------------------------------------------------->*/}
                            <section className={'sm:w-3/5 mx-auto text-justify mb-10 sm:p-0 p-2'}>
                                <h2 className="sm:text-xl  text-black pb-4">Photos of XYZ  Dhaka</h2>
                                <AboutSlide/>
                            </section>
{/*<--------------------------------------------------End About Slider Protion  For Hotel------------------------------------------------------>*/}





{/*<--------------------------------------------------Start Video  Protion  For Hotel---------------------------------------------------------->*/}
                            <div className={'bg-white w-full sm:w-3/5 mt-10  mx-auto mb-10 sm:p-0 p-2'}>
                                <div className={'w-full text-xl'}>Videos</div>
                                <div className={'flex flex-wrap mt-4 w-full '}>
                                    {
                                        !_.isEmpty(about.data)?
                                            !_.isEmpty(about.data[0].video)?
                                                about.data[0].video.map((v,i)=>
                                                      <video key={i} className={" sm:w-1/2 w-full sm:pr-1 sm:mb-0 mb-6"} autoPlay controls muted loop width="800" height="600"
                                                               preload="auto">
                                                        <source src={v.video} type="video/mp4"/>
                                                     </video>
                                            ):<>Content Not Found</>
                                        :<>Content Not Found</>
                                    }
                                </div>
                            </div>
                        </div>
{/*<--------------------------------------------------End Video  Protion  For Hotel---------------------------------------------------------->*/}

                    </>
            }

        </div>
    );
};

export default About;