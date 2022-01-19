import React from 'react';
import about from '../../../src/assets/image/about.jpg'
import hotel_Img from '../../../src/assets/image/hotel_Img.jpg'
import img from '../../../src/assets/image/img.png'


const About = () => {
    return (
        <div>
            <div className={''}>
                <section className={'w-full h-auto '}>

                    <div className={'flex w-full relative sm:h-140 h-72 object-cover items-center  justify-center '}
                         style={{backgroundImage: `url(${about})`}}>
                        <div className={'w-1/2 sm:pl-12 '}>
                            <h4 className={'font-semibold text-my-primary sm:text-4xl uppercase text-gray-100 text-2xl text-center'}>About Santoor</h4>
                        </div>

                    </div>

                </section>

                <section className={'w-full bg-slate-300'}>
                    <div className={'w-11/12  flex sm:w-3/4 h-auto pb-10 flex flex-wrap mx-auto  text-justify '}>
                        <div className="flex flex-col pl-4 w-full mt-8">
                            <h1 className="sm:text-4xl text-2xl text-yellow-700">
                                Pan Pacific Hotels
                            </h1>
                        </div>
                        <div className={' w-full text-black  text-xl p-4'}>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
                                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                                from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
                                the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
                                1.10.32.
                            </p><br/>
                            <p>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                                by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </p>
                        </div>
                    </div>

                </section>


                <section className={'w-full  mx-auto bg-white text-justify mb-10'}>
                    <div className={'w-11/12 sm:w-3/4 mx-auto bg-white text-justify mb-10'}>
                        <h2 className={'pl-4 pt-16 pb-2 text-4xl'}>Our Leaders</h2>
                        <p className={'pl-4 pb-4 text-xl'}>Our leadership comprises a team of experienced individuals dedicated to spearheading the Group’s numerous business efforts across the globe.</p>
                        {[1,1,1].map((v,i)=>(
                            <div className={'flex w-full pb-4'}>

                                <div className={'sm:w-1/4 w-full pl-4'}>
                                    <img height={''} width={'300'} src={img}/>
                                </div>
                                <div className={'sm:w-3/4 w-full pr-2'}>
                                    <h2 className={'font-semibold text-2xl'}>Choe Peng Sum</h2>
                                    <h3 className={'pb-4'}>Chief Executive Officer</h3>
                                    <p>Peng Sum has over 30 years of experience in the hospitality industry from multiple destinations across Asia and Europe.
                                        As CEO, Peng Sum leads the Group's vision and mission. He is charged with the business performance and operations of the
                                        Group’s global portfolio and the strategic expansion of its Pan Pacific, PARKROYAL COLLECTION and PARKROYAL brands.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <div className={'bg-white'}>
                    <section className={'w-11/12 sm:w-3/4 mt-20 mx-auto  text-justify mb-10'}>
                        <video className={"my-20 w-full"} autoPlay controls muted loop width="800" height="600"
                               preload="auto">
                            <source src={``} type="video/mp4"/>
                        </video>
                    </section>
                </div>


            </div>



        </div>
    );
};

export default About;