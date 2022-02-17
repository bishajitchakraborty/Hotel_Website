import React from 'react';
import about from '../../../src/assets/image/about.jpg'
import hotel_Img from '../../../src/assets/image/hotel_Img.jpg'
import img from '../../../src/assets/image/img.png'
import video from '../../../src/assets/video/video_1.mp4'
import img_10 from "../../assets/image/img_10.png";

const About = () => {
    return (
        <div>
            <div className={''}>
                <section className={'w-full h-auto'}>
                    <div className={'flex w-full relative sm:h-140 h-72 object-cover items-center  justify-center '}
                         style={{backgroundImage: `url(${about})`}}>
                        <div className={'w-1/2 sm:pl-12 '}>
                            <h4 className={'font-semibold text-my-primary sm:text-4xl uppercase text-gray-100 text-2xl text-center'}>About Santoor</h4>
                        </div>

                    </div>

                </section>

                    <div className={'flex sm:w-3/5 w-full h-auto pb-10 flex flex-wrap mx-auto  text-justify '}>
                        <div className="flex flex-col pl-4 w-full mt-8">
                            <h1 className="sm:text-xl text-2xl text-black">
                                About Le Meridien Dhaka
                            </h1>
                        </div>
                        <div className={' w-full text-gray-500   p-4'}>
                            <p>With a stay at Le Meridien Dhaka in Dhaka, you'll be next to a golf course, within a 10-minute drive of Jamuna Future Park and Aarong Flagship Outlet. This 5-star resort is 5.2 mi (8.4 km) from United Hospital and
                                5.9 mi (9.5 km) from Kurmitola General Hospital. Make yourself at home in one of the 304 air-conditioned rooms featuring minibars and LED televisions. Complimentary wired and wireless Internet access keeps you connected,
                                and cable programming provides entertainment. Private bathrooms with separate bathtubs and showers feature deep soaking bathtubs and rainfall showerheads. Conveniences include phones, as well as safes and desks. Pamper
                                yourself with onsite massages and facials. You can take advantage of recreational amenities such as a 24-hour health club, an outdoor pool, and a steam room. This resort also features complimentary wireless Internet access,
                                concierge services, and babysitting/childcare (surcharge). Grab a bite at one of the resort's 7 restaurants, or stay in and take advantage of the 24-hour room service. Relax with a refreshing drink from the poolside bar or one
                                of the 3 bars/lounges. Buffet breakfasts are available daily from 6:30 AM to 11:00 AM for a fee. Featured amenities include a business center, express check-in, and complimentary newspapers in the lobby. Planning an event in Dhaka?
                                This resort has 16512 square feet (1534 square meters) of space consisting of a conference center and meeting rooms. A roundtrip airport shuttle is provided for a surcharge (available 24 hours), and free self parking is available onsite.
                            </p>
                        </div>
                    </div>



                <section className={'sm:w-3/5  mx-auto bg-white text-justify mb-10'}>
                   <h2 className="sm:text-xl text-2xl text-black pb-4">Location</h2>
                    <div className={'border h-124 '}>

                    </div>

                </section>

                <section className={'sm:w-3/5 mx-auto bg-white text-justify '}>
                   <h2 className="sm:text-xl text-2xl text-black pb-4">Photos of Pan Pacific Dhaka</h2>
                   <div className={'flex '}>
                        <div className={'w-1/2 h-48 pr-4'}>
                            <div className={'w-full flex pb-2'}>
                                 <div className={'w-1/2 pr-1'}>
                                    <img className={'h-48 w-full object-cover'} src={img_10}/>
                                 </div>
                                 <div className={'w-1/2 pl-1'}>
                                     <img className={'h-48 w-full object-cover'} src={img_10}/>
                                 </div>
                             </div>
                              <div className={'w-full'}>
                                    <img className={'h-48 w-full object-cover'} src={img_10}/>
                              </div>
                        </div>
                        <div className={'w-1/2 pl-4 '}>
                             <div className={'w-full pb-2'}>
                                  <img className={'h-48 w-full object-cover'} src={img_10}/>
                             </div>
                            <div className={'w-full flex'}>
                               <div className={'w-1/2 pr-1'}>
                                  <img className={'h-48 w-full object-cover'} src={img_10}/>
                               </div>
                               <div className={'w-1/2 pl-1'}>
                                   <img className={'h-48 w-full object-cover'} src={img_10}/>
                               </div>
                            </div>
                        </div>
                   </div>
                </section>


                <div className={'bg-white w-full flex sm:w-3/5 mt-20 mx-auto  text-justify mb-10'}>
                     <div>
                         <h2>Videos</h2>   
                     </div>
                    <section className={'w-1/2 m-2'}>
                        <video className={"my-20 w-full"} autoPlay controls muted loop width="" height="600"
                               preload="auto">
                            <source src={video} type="video/mp4"/>
                        </video>
                    </section>
                    <section className={'w-1/2 m-2'}>

                        <video className={"my-20 w-full"} autoPlay controls muted loop width="800" height="600"
                               preload="auto">
                            <source src={video} type="video/mp4"/>
                        </video>
                    </section>
                </div>


            </div>



        </div>
    );
};

export default About;