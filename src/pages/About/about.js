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
                        <div className="flex w-full mt-16">
                            <h1 className="text-xl  text-black">
                                About XYZ Meridien Dhaka
                            </h1>
                        </div>
                        <div className={' w-full text-gray-500 mt-4'}>
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
                   <h2 className="text-xl  text-black pb-4">Location</h2>
                    <div className={'border h-124 '}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29192.707637170097!2d90.4107785!3d23.850992549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6652c0b863d%3A0xc404e4ca02255b30!2sKawlar%20Bazar!5e0!3m2!1sen!2sbd!4v1645253355034!5m2!1sen!2sbd"
                       className={'h-124 w-full'}   allowFullScreen="" loading="lazy">
                    </iframe>
                    </div>
                </section>

                <section className={'sm:w-3/5 mx-auto bg-white text-justify '}>
                   <h2 className="sm:text-xl  text-black pb-4">Photos of XYZ  Dhaka</h2>
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


                <div className={'bg-white w-full sm:w-3/5 mt-20 mx-auto  mb-10'}>

                    <div className={'w-full text-xl'}>Videos</div>
                    <div className={'flex mt-4 w-full'}>
                            <video className={" sm:w-1/2 w-full sm:pr-1"} autoPlay controls muted loop width="800" height="600"
                                   preload="auto">
                                <source src={video} type="video/mp4"/>
                            </video>
                            <video className={" sm:w-1/2 full sm:pl-1"} autoPlay controls muted loop width="800" height="600"
                                   preload="auto">
                                <source src={video} type="video/mp4"/>
                            </video>

                    </div>

                </div>


            </div>



        </div>
    );
};

export default About;