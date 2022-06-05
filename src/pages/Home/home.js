import React, {useEffect, useRef} from 'react';
import _ from "lodash";
import HomeSlider from "./HomeSlider";
import {useDispatch, useSelector} from "react-redux";
import {getHome} from "../../Services/Home/HomeAction";
import {NavLink} from "react-router-dom";
import EventSlider from "./EventSlider";
import {Skeleton} from "@mui/material";




const Home = () => {
    const home = useSelector(store => store.home)
    const about = useSelector(store => store.about)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHome())
    }, [])
    const overview = useRef(null)
    const rooms =useRef(null)
    const packages =useRef(null)
    const restaurant  =useRef(null)
    const events =useRef(null)
    const nearBy =useRef(null)
    const location =useRef(null)
    const video =useRef(null)
    const scrollToSection = (elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            {
                home.loading?
                    <>
                        <div className={'w-full'}>
                            <Skeleton varient="rect" height={400}/>
                        </div>
                        <div className={'sm:w-3/5 mx-auto  border-b border-gray-300 sm:p-0 p-2'}>
                            <div className="w-11/12 sm:w-3/4  leading-8  border-white-400 pt-10 mx-auto  ">
                                <Skeleton key={1} variant={"react"} height={600} width="100%"/>
                                <br/>
                                <Skeleton key={2} variant={"react"} height={600} width="100%"/>
                            </div>
                        </div>
                        <div className="my-11 w-full ">
                            <div className="w-11/12 sm:w-3/4  leading-8  border-white-400 pt-10 mx-auto  ">
                                <Skeleton  variant={"react"} height={200} width="100%"/>
                                <br/>
                                <Skeleton variant={"react"} height={200} width="100%"/>
                                <br/>
                                <Skeleton variant={"react"} height={200} width="100%"/>
                            </div>
                        </div>


                        <div className="my-11 w-full ">
                            <div className="w-11/12 sm:w-3/4  leading-8  border-white-400 pt-10 mx-auto  ">
                                <Skeleton  variant={"react"} height={200} width="100%"/>
                                <br/>
                                <Skeleton variant={"react"} height={200} width="100%"/>
                                <br/>
                                <Skeleton variant={"react"} height={200} width="100%"/>
                            </div>
                        </div>

                    </>:
                    <>
                        <div ref={overview}>
                            <section className={'w-full '}>
                                <HomeSlider/>
                            </section>
                           <section className={'sm:w-3/5 mx-auto md:block hidden h-full mt-8 border-b-2 border-white-500 '}>
                               <nav className="navbar  ">
                                   <ul className="nav-links ">
                                       <div className="sub-menu items-center ">
                                           <li className={'link'} onClick={()=>scrollToSection(overview)}>Overviews</li>
                                           <li className={'link '} onClick={()=>scrollToSection(rooms)}>Rooms</li>
                                           <li className={'link'} onClick={()=>scrollToSection(packages)}>Offers & Packages</li>
                                           <li className={'link'} onClick={()=>scrollToSection(restaurant)}>Restaurants & Bars </li>
                                           <li className={'link'} onClick={()=>scrollToSection(events)}>Meetings & Events </li>
                                           <li className={'link'} onClick={()=>scrollToSection(nearBy)}>Nearby Attractions </li>
                                           <li className={'link'} onClick={()=>scrollToSection(location)}>Location </li>
                                           <li className={'link'} onClick={()=>scrollToSection(video)}>Video</li>
                                       </div>
                                   </ul>
                               </nav>
                           </section>


{/*<--------------------------------------------------Start Out Look Protion For Hotel---------------------------------------------->*/}
                            <section className={'sm:w-3/5 mx-auto h-full sm:p-0 p-2'}>
                                <div className={'my-10 '}>
                                    <h2 className={'text-2xl py-8 text-gray-700'}>Unwind in style at our hotel in Dhaka, Bangladesh</h2>
                                    {
                                        !_.isEmpty(home.data)?
                                            !_.isEmpty(home.data[0].style)?
                                            <div className={'sm:pr-48 text-sm text-gray-700'} dangerouslySetInnerHTML={{__html:home.data[0].style.description}}/>

                                            :<></>
                                            :<></>
                                    }
                                </div>
                                <div className={'flex flex-wrap border-y border-gray-300 py-10 '}>
                                    <div className={'sm:w-1/2 w-full sm:pr-4'}>
                                        <div className={'pb-2'}>
                                            {
                                                !_.isEmpty(home.data)?
                                                    !_.isEmpty(home.data[0].style)?
                                                        <img className={'h-48 w-full object-cover'} src={home.data[0].style.image1}/>

                                                        :<></>
                                                    :<></>
                                            }

                                        </div>
                                        <div className={'flex w-full '}>
                                            <div className={'sm:w-1/2 pr-2'}>
                                                {
                                                    !_.isEmpty(home.data)?
                                                        !_.isEmpty(home.data[0].style)?
                                                            <img className={'h-48 w-full object-cover'} src={home.data[0].style.image2}/>

                                                            :<></>
                                                        :<></>
                                                }
                                            </div>
                                            <div className={'sm:w-1/2 '}>
                                                {
                                                    !_.isEmpty(home.data)?
                                                        !_.isEmpty(home.data[0].style)?
                                                            <img className={'h-48 w-full object-cover'} src={home.data[0].style.image3}/>

                                                            :<></>
                                                        :<></>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'sm:w-1/2 w-full sm:pl-4 md:pt-0 pt-2'}>
                                        {
                                            !_.isEmpty(home.data)?
                                                !_.isEmpty(home.data[0].style)?
                                                    <img className={'h-96 w-full object-cover'} src={home.data[0].style.image4}/>

                                                    :<></>
                                                :<></>
                                        }
                                    </div>
                                </div>
                            </section>
{/*<--------------------------------------------------End Out Look Protion For Hotel---------------------------------------------->*/}



{/*<--------------------------------------------------Start Rooms Protion For Hotel---------------------------------------------->*/}
                            <section className={'sm:w-3/5 mx-auto  border-b border-gray-300 sm:p-0 p-2'} ref={rooms}>
                                <div className={'my-8 '}>
                                    <h2 className={'text-2xl pb-4 text-gray-700'}>Complete work with in-room free Wi-Fi</h2>
                                    {
                                        !_.isEmpty(home.data)?
                                        <div className={'sm:pr-48 text-gray-700 text-sm'} dangerouslySetInnerHTML={{__html:home.data[0].roomDescription}}/>

                                        :<></>
                                    }
                                </div>

                                <div className={' flex flex-wrap  mt-10 mb-16 sm:p-0 p-2'}>
                                    {
                                        !_.isEmpty(home.data)?
                                            !_.isEmpty(home.data[0].room)?
                                                home.data[0].room.map((v,i)=>(
                                                    <div className={'sm:w-1/3 w-full'} key={i}>
                                                        <div className={'m-2 bg-white border border-gray-300 '}>
                                                            <div className={'relative'}>
                                                                <img  src={v.thumbnail}/>
                                                            </div>
                                                            <div className={'text-center'}>
                                                                <h2 className={'py-2 pt-4 text-2xl text-gray-700'}><span className={''}>{v.tittle}</span></h2>
                                                                <p className={'text-center text-sm text-gray-700'}>{v.shortTittle}</p>
                                                            </div>
                                                            <div className={'flex flex-wrap text-center text-gray-700 justify-center w-3/4 mx-auto py-2'}>
                                                                <span className="material-icons w-1/6 ">
                                                                    wifi
                                                                </span>
                                                                <span className="material-icons w-1/6 ">
                                                                    tv
                                                                </span>
                                                                <span className="material-icons w-1/6 ">
                                                                    headphones
                                                                </span>
                                                                <span className="material-icons w-1/6 ">
                                                                    coffee_maker
                                                                </span>
                                                                <span className="material-icons w-1/6 ">
                                                                    event
                                                                </span>
                                                                <span className="material-icons w-1/6 ">
                                                                    light
                                                                </span>
                                                                <span className="material-icons w-1/6 ">
                                                                    dry
                                                                </span>
                                                                <span className="material-icons w-1/6 ">
                                                                    soap
                                                                </span>
                                                                <span className="material-icons w-1/6 ">
                                                                    timer
                                                                </span>
                                                                <span className="material-icons w-1/6 ">
                                                                    wifi
                                                                </span>
                                                            </div>
                                                            <div className={' w-3/4 mx-auto pb-10 pt-4'}>
                                                                <p className={'text-sm text-center text-gray-700'}>
                                                                    {v.shortDescription}
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                )):<></>
                                            :<>Content Not Found</>
                                    }
                                </div>
                            </section>
{/*<--------------------------------------------------End Rooms Protion For Hotel---------------------------------------------->*/}




{/*<--------------------------------------------------Start Restaurants Protion and Bers For Hotel---------------------------------------------->*/}
                            <section className={'sm:w-3/5 w-full mx-auto flex flex-wrap  py-8 border-b border-gray-400  mb-8 sm:p-0 p-2'} ref={restaurant}>
                                <h2 className={'text-2xl text-gray-700 pt-10'}>Host up to 1,100 guests in our flexible venues</h2>
                                    {
                                        !_.isEmpty(home.data)?
                                            !_.isEmpty(home.data[0].venus)?
                                                    <div className={'flex flex-wrap py-8 '}>
                                                        <div className={'sm:w-1/2 w-full sm:pr-4'}>
                                                            <div className={'text-sm text-gray-700'} dangerouslySetInnerHTML={{__html:home.data[0].venus.description}} >

                                                            </div>
                                                        </div>
                                                        <div className={'sm:w-1/2 w-full sm:pl-4'}>
                                                            <img className={'h-96 w-full object-cover'} src={home.data[0].venus.image}/>
                                                        </div>
                                                    </div>
                                            :<>Content Not Found</>
                                        :<>Content Not Found</>
                                    }
                            </section>


                            <section className={'sm:w-3/5 w-full mx-auto flex flex-wrap  border-b border-gray-400  mb-8 sm:p-0 p-2'}>
                                <h2 className={'text-2xl text-gray-700'}>Restaurants and bars</h2>
                                {
                                    !_.isEmpty(home.data)?
                                        !_.isEmpty(home.data[0].restaurantsBars)?
                                                    <div className={'flex flex-wrap py-8 '}>
                                                        <div className={'sm:w-1/2 w-full sm:pr-4'}>
                                                            <img className={' h-96 w-full object-cover'} src={home.data[0].restaurantsBars.image}/>
                                                        </div>
                                                        <div className={'sm:w-1/2 w-full sm:pl-4'}>
                                                            <div className={'text-sm text-gray-700'} dangerouslySetInnerHTML={{__html:home.data[0].restaurantsBars.description}}>

                                                            </div>
                                                        </div>

                                                    </div>
                                            :<></>
                                        :<><br/>Content Not Found</>
                                }
                            </section>
{/*<--------------------------------------------------End Restaurants Protion and Bers For Hotel---------------------------------------------->*/}




{/*<--------------------------------------------------Start Packages Protion  For Hotel------------------------------------------------------->*/}
                            <section className={'sm:w-3/5 mx-auto border-b border-gray-300 sm:p-0 p-2'} ref={packages}>
                                <div className={'my-4 '}>
                                    <h2 className={'text-2xl pb-4 text-gray-700'}>Offers and packages</h2>
                                </div>
                                <div className={' flex flex-wrap  mt-2 mb-10'}>
                                    {
                                        !_.isEmpty(home.data)?
                                            !_.isEmpty(home.data[0].offerPackage)?
                                                home.data[0].offerPackage.map((v,i)=>(
                                                <div className={'sm:w-1/3 w-full'} key={i}>
                                                    <div className={'m-2 bg-white border border-gray-300 '}>
                                                        <div className={'relative'}>
                                                            <img className={''} src={v.thumbnail}/>
                                                        </div>
                                                        <div className={'pl-4 pb-8'}>
                                                            <h2 className={'py-2 pt-4 text-2xl text-gray-700'}><span className={''}>{v.tittle}</span></h2>
                                                        </div>
                                                        <div className={' w-full mx-auto pb-10 pt-4 px-4'}>
                                                            <p className={'text-sm  text-gray-700'}>
                                                                {v.SubTittle}
                                                            </p>
                                                        </div>
                                                        <div className={'flex pb-4'}>
                                                            <div className={'w-1/2 p-2 pl-4'}>
                                                                <p className={'text-xs'}>{v.offerTittle}</p>
                                                                <h2 className={'text-lg font-semifont'}>EUR {v.price}</h2>
                                                                <p className={'text-xs'}>{v.offerAllow}</p>
                                                            </div>
                                                            <div className={'w-1/2 p-2'}>
                                                                <NavLink to={'/login'}>
                                                                    <button
                                                                        className="w-full flex justify-center  mx-auto text-white bg-red-700 py-4 focus:outline-none hover:bg-red-900  text-sm">
                                                                        Book Now
                                                                    </button>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )):<>Content Not Found</>
                                        :<>Content Not Found</>
                                    }
                                </div>
                            </section>
{/*<--------------------------------------------------End Packages Protion  For Hotel------------------------------------------------------->*/}




{/*<--------------------------------------------------Start Meeting Protion  For Hotel------------------------------------------------------->*/}
                            <section className={'md:w-3/5 mx-auto my-10 md:p-0 p-2'} ref={events}>
                                <h2 className={'text-4xl py-4 text-gray-700'}>Exceptional Meeting Experiences</h2>
                                {
                                    !_.isEmpty(home.data)?
                                        !_.isEmpty(home.data[0])?
                                            <div className={'py-4 text-sm text-gray-700'} dangerouslySetInnerHTML={{__html:home.data[0].meetingDescription}}/>
                                            :<></>
                                        :<></>
                                }
                                <div className={''}>
                                    <EventSlider/>
                                </div>

                            </section>
{/*<--------------------------------------------------End Packages Protion  For Hotel------------------------------------------------------->*/}




{/*<--------------------------------------------------Start Nearest Place Protion  For Hotel-------------------------------------------------->*/}
                            <section className={'md:w-3/5 mx-auto my-10 border-b border-gray-300 md:p-0 p-2'} ref={nearBy}>
                                <div>
                                    <h2 className={'text-4xl py-4 text-gray-700'}>Discover things to do in Dhaka, Bangladesh</h2>
                                    {
                                        !_.isEmpty(home.data)?
                                            !_.isEmpty(home.data[0])?
                                                <div className={'py-4 text-sm text-gray-700'} dangerouslySetInnerHTML={{__html:home.data[0].placeDescription}}/>
                                                :<></>
                                            :<></>
                                    }
                                </div>

                                <div className={'flex flex-wrap '}>
                                    {
                                        !_.isEmpty(home.data)?
                                            !_.isEmpty(home.data[0].nearestPlace)?
                                                home.data[0].nearestPlace.map((v,i)=>(
                                                    <div className={'md:w-1/3 w-full'} key={i}>
                                                        <div className={'m-2 border border-gray-300 p-2'}>
                                                            <div className={'flex '}>
                                                                <div>
                                                                    <span className="material-symbols-outlined text-6xl items-center">
                                                                          {v.icon}
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <div>
                                                                        <h2 className={'text-2xl text-gray-700'}>{v.name}</h2>
                                                                    </div>
                                                                    <div>
                                                                        <p className={'text-xs pl-2'}>{v.distance}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={'py-4 text-sm text-gray-700'} dangerouslySetInnerHTML={{__html:v.shortDescription}}>

                                                            </div>
                                                        </div>
                                                    </div>
                                                )):<>Content Not Found</>
                                            :<>Content Not Found</>
                                    }
                                </div>
                            </section>
{/*<--------------------------------------------------End Nearest Place Protion  For Hotel-------------------------------------------------->*/}


{/*<--------------------------------------------------Start Location Protion  For Hotel-------------------------------------------------->*/}
                            <section className={'sm:w-3/5  mx-auto bg-white text-justify my-10 sm:p-0 p-2'} ref={location}>
                                <h2 className="text-xl  text-black pb-4">Location</h2>
                                <div className={'border h-124 '}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29192.707637170097!2d90.4107785!3d23.850992549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6652c0b863d%3A0xc404e4ca02255b30!2sKawlar%20Bazar!5e0!3m2!1sen!2sbd!4v1645253355034!5m2!1sen!2sbd"
                                        className={'h-124 w-full'}   allowFullScreen="" loading="lazy">
                                    </iframe>
                                </div>
                            </section>
{/*<--------------------------------------------------End Location Protion  For Hotel-------------------------------------------------->*/}


{/*<--------------------------------------------------Start Video Protion  For Hotel-------------------------------------------------->*/}
{/*                            <div className={'bg-white w-full sm:w-3/5 mt-10  mx-auto mb-10 sm:p-0 p-2'} ref={video}>*/}
{/*                                {*/}
{/*                                    about.loading?*/}
{/*                                        <>*/}

{/*                                        </>:*/}
{/*                                        <>*/}
{/*                                            <div className={'w-full text-xl'}>Videos</div>*/}
{/*                                            <div className={'flex flex-wrap mt-4 w-full '}>*/}
{/*                                                {*/}
{/*                                                    !_.isEmpty(about.data)?*/}
{/*                                                        !_.isEmpty(about.data[0].video)?*/}
{/*                                                            about.data[0].video.map((v,i)=>*/}
{/*                                                                <video className={" sm:w-1/2 w-full sm:pr-1 sm:mb-0 mb-6"} autoPlay controls muted loop width="800" height="600"*/}
{/*                                                                       preload="auto">*/}
{/*                                                                    <source src={v.video} type="video/mp4"/>*/}
{/*                                                                </video>*/}
{/*                                                            ):<>Content Not Found</>*/}
{/*                                                        :<>Content Not Found</>*/}
{/*                                                }*/}
{/*                                            </div>*/}
{/*                                        </>*/}
{/*                                }*/}

{/*                            </div>*/}
{/*<--------------------------------------------------End Video Protion  For Hotel-------------------------------------------------->*/}

                        </div>
                    </>
            }
        </div>
    );
};

export default Home;