import React from 'react';
import s2 from "../../assets/image/slider1.jpg"
import img_3 from "../../assets/image/img_3.png";
import img_12 from "../../assets/image/img_12.png";
import img_10 from "../../assets/image/img_10.png";
import img_11 from "../../assets/image/img_11.png";
import about from "../../assets/image/img_15.png";
import res from "../../assets/image/img_13.png";
import offer from "../../assets/image/img_14.png";
import promotion from "../../assets/image/promotions.webp";
import img_6 from "../../assets/image/img_6.png";

const Home = () => {
    return (
        <div>
            <div>

                <section className={'w-full '}>
                    <div className={'flex w-full relative h-224 object-cover items-center  justify-center bg-no-repeat'}
                        style={{backgroundImage: `url(${about})`}}>
                        <div className={'w-full  text-center'}>
                                <span className={'italic text-2xl text-lime-200'}>
                                    Welcome to
                                </span>
                                <h2 className={'font-semibold sm:text-4xl text-white uppercase text-center'}>Grand Restaurant</h2>
                        </div>
                    </div>
                </section>

                <section className={'sm:w-3/5 mx-auto h-full '}>
                    <div className={'my-16 '}>
                        <h2 className={'text-2xl py-8'}>Unwind in style at our hotel in Dhaka, Bangladesh</h2>
                        <p>

                            Situated on seven acres of lush gardens in the heart of Dhaka's primary commercial hub, the Radisson Blu Dhaka Water Garden provides a serene escape from the bustle of the city.
                            Offering the perfect balance of supreme comfort and business-minded functionality, the hotel features five-star resort amenities and incredible conveniences, such as the short 15-minute
                            drive to Hazrat Shahjalal International Airport (DAC). Major tourist attractions, such as the National Assembly Building or Ahsan Manzil, are also located nearby, making the hotel
                            a perfect home base for both business and leisure trips to the Bangladesh capital.<br/><br/>

                            Whether you've spent your day hosting a productive business meeting in our 3,000-square-meter event facilities or diving into the rich culture of Bangladesh, you can return and
                            relax amid the upscale furnishings found in our contemporary rooms and suites. Take time to indulge in our world-class amenities and services, including a glistening outdoor pool,
                            a soothing spa, an adjacent golf course, and a host of on-site dining options.
                        </p>
                    </div>
                    <div className={'flex flex-wrap border-y border-gray-300 py-10 '}>
                        <div className={'sm:w-1/2 w-full pr-4'}>
                            <div className={'pb-2'}>
                                <img className={'h-48 w-full object-cover'} src={img_10}/>
                            </div>
                            <div className={'flex w-full '}>
                                <div className={'sm:w-1/2 pr-2'}>
                                    <img className={'h-48 w-full object-cover pb-2'} src={img_10}/>
                                </div>
                                <div className={'sm:w-1/2 '}>
                                    <img className={'h-48 w-full object-cover pb-2'} src={img_10}/>
                                </div>
                            </div>
                        </div>
                        <div className={'sm:w-1/2 w-full pl-4'}>
                            <img className={' h-96 w-full object-cover'} src={img_11}/>
                        </div>
                    </div>

                </section>


                <section className={'sm:w-3/5 mx-auto  border-b border-gray-300'}>
                    <div className={'my-8 '}>
                        <h2 className={'text-2xl pb-4'}>Complete work with in-room free Wi-Fi</h2>
                        <p className={'pr-48'}>
                            Situated on seven acres of lush gardens in the heart of Dhaka's primary commercial hub, the Radisson Blu Dhaka Water Garden provides a serene escape from the bustle of the city.
                            Offering the perfect balance of supreme comfort and business-minded functionality, the hotel features five-star resort amenities and incredible conveniences, such as the short 15-minute
                            drive to Hazrat Shahjalal International Airport (DAC). Major tourist attractions, such as the National Assembly Building or Ahsan Manzil, are also located nearby, making the hotel
                            a perfect home base for both business and leisure trips to the Bangladesh capital.<br/><br/>
                        </p>
                    </div>

                    <div className={' flex flex-wrap  mt-10 mb-16'}>
                        {[1,1,1,1,1,1].map((v,i)=>(
                            <div className={'sm:w-1/3 w-full'}>
                                <div className={'m-2 bg-white border border-gray-300 '}>
                                    <div className={'relative'}>
                                        <img  height="" width={''} src={img_12}/>
                                    </div>
                                    <div className={'text-center'}>
                                        <h2 className={'py-2 pt-4 text-2xl'}><span className={''}>Superior Room</span></h2>
                                        <p className={'text-center text-sm text-gray-400'}>28 m^2 | 2 double or 1 king | 2 adults</p>
                                    </div>
                                    <div className={'flex flex-wrap text-center text-gray-400 justify-center w-3/4 mx-auto py-2'}>
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
                                        <p className={'text-sm text-center text-gray-400'}>
                                            Unwind with plush bedding, free Wi-Fi,and a smart TV in this standardroom.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                <section className={'sm:w-3/5 w-full mx-auto flex flex-wrap  py-8 border-b border-gray-400  mb-16 '}>

                    <h2 className={'text-2xl'}>Host up to 1,100 guests in our flexible venues</h2>
                    <div className={'flex flex-wrap py-8 '}>
                        <div className={'sm:w-1/2 w-full pr-4'}>
                           <p className={'text-gray-400'}>
                               Plan boardroom meetings, seminars, banquets, or grand weddings with our eight versatile event venues. Covering more
                               than 3,000 square meters, our event facilities can accommodate up to 1,100 guests in a variety of settings.
                               The 990-square-meter Grand Ballroom provides plenty of space to celebrate weddings and receptions. Meeting amenities
                               include catering, free Wi-Fi, and the latest audiovisual equipment.
                           </p>
                        </div>
                        <div className={'sm:w-1/2 w-full pl-4'}>
                            <img className={' h-96 w-full'} src={img_3}/>
                        </div>
                    </div>

                </section>


                <section className={'sm:w-3/5 w-full mx-auto flex flex-wrap  border-b border-gray-400  mb-16 '}>

                    <h2 className={'text-2xl'}>Restaurants and bars</h2>

                    <div className={'flex flex-wrap py-8 '}>
                        <div className={'sm:w-1/2 w-full pr-4'}>
                            <img className={' h-96 w-full'} src={res}/>
                        </div>
                        <div className={'sm:w-1/2 w-full pl-4'}>
                            <p className={'text-gray-400'}>

                                Take advantage of our four restaurants and two bars when you stay at the Radisson Blu. Eat a hearty breakfast at the Water Garden Brasserie or
                                come to lunch and dinner for an international buffet and live cooking stations. Sublime offers a sophisticated atmosphere and local Bangladeshi
                                produce used in fine cuisine. If you want a more casual setting, enjoy Asian-inspired cuisine in Spice & Rice. Looking for a light meal? Chit Chat
                                offers sandwiches, salads, and quiches. In the evenings, you can enjoy drinks and live entertainment with friends at the Blaze Entertainment Lounge
                                & Bar or The Cigar Bar.
                            </p>
                        </div>

                    </div>
                </section>



                <section className={'sm:w-3/5 mx-auto border-b border-gray-300'}>
                    <div className={'my-8 '}>
                        <h2 className={'text-2xl pb-4'}>Offers and packages</h2>
                    </div>
                    <div className={' flex flex-wrap  mt-10 mb-16'}>
                        {[1,1,1,1,1,1].map((v,i)=>(
                            <div className={'sm:w-1/3 w-full'}>
                                <div className={'m-2 bg-white border border-gray-300 '}>
                                    <div className={'relative'}>
                                        <img  height="" width={''} src={offer}/>
                                    </div>
                                    <div className={'pl-4 pb-8'}>
                                        <h2 className={'py-2 pt-4 text-2xl'}><span className={''}>Business Experience</span></h2>
                                    </div>
                                    <div className={' w-full mx-auto pb-10 pt-4 px-4'}>
                                        <p className={'text-sm  text-gray-400'}>
                                            Unwind with plush bedding, free Wi-Fi,and a smart TV in this standardroom.
                                        </p>
                                    </div>
                                    <div className={'flex pb-4'}>
                                        <div className={'w-1/2 p-2 pl-4'}>
                                            <p className={'text-xs'}>Book this offer from</p>
                                            <h2 className={'text-lg font-semifont'}>EUR 99.55</h2>
                                            <p className={'text-xs'}>per night</p>
                                        </div>
                                        <div className={'w-1/2 p-2'}>

                                                <button
                                                    className="w-full flex justify-center  mx-auto text-white bg-red-700 py-4 focus:outline-none hover:bg-red-900  text-sm">Book Now</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>


        </div>
    );
};

export default Home;