import React from 'react';
import img_5 from "../../assets/image/img_5.png";
import about from "../../assets/image/about.jpg";
import promotion from "../../assets/image/promotions.webp";
import img_6 from "../../assets/image/img_6.png";

const Catering = () => {
    return (
        <div>
            <section className={'w-full h-auto'}>
                <div className={'flex w-full relative sm:h-140 h-72 object-cover items-center  justify-center '}
                     style={{backgroundImage: `url(${img_5})`}}>
                    <div className={'w-1/2 sm:pl-12 text-center'}>
                                <span className={'italic text-2xl text-lime-200'}>
                                    Welcome to
                                </span>
                        <h2 className={'font-semibold sm:text-4xl text-white uppercase text-amber-700 text-center'}>Grand Restaurant Menu</h2>
                    </div>
                </div>
            </section>

            <section className={'full flex my-20'}>
                <div className={'sm:w-1/4 px-12'}>
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex border-2 border-gray-200 rounded">
                            <input type="text" className="px-4 py-2 w-88" placeholder="Search..."/>
                                <button className="px-4 text-white bg-red-500 border-l ">
                                    Search
                                </button>
                        </div>
                    </div>
                    <div className={'bg-slate-300'}>
                        <div className={'mb-4'}>
                            <h2 className={'text-center pt-4 text-red-600'}>Items Available</h2>
                            <h2>Our Menu</h2>
                        </div>
                    </div>
                    <div className={'bg-red-500 p-4'}>
                        <h2 className={'text-center text-white'}>Need Help Booking?</h2>
                        <p className={'text-center text-white'}>
                            Just call our customer services at any time, we are waiting 24 hours to recieve your calls.

                            9128737, 9124892
                            01937 144419
                        </p>
                    </div>
                </div>
                <section className={'sm:w-2/4 mx-auto '}>
                    {[1,1,1,1].map((v,i)=>(
                        <div className={'flex border-2 mb-2 border-gray-500'}>
                            <div className={'sm:w-1/4 rounded-full'}>
                                <img className={''} height={''} src={img_6}/>
                            </div>
                            <div className={'sm:w-2/4'}>
                                <h2 className={'uppercase font-semibold pt-4'}>
                                    Noorjahani Biryani (Chicken)
                                </h2>
                                <span className={'text-2xl text-red-600'}>*****</span>
                                <h4 className={'uppercase'}>Biryani</h4>

                                <button className="w-16sm:w-3/6 mt-5 justify-center  mx-auto text-red-500 bg-white border-2 border-red-500 p-2 uppercase focus:outline-none hover:bg-red-500 hover:text-white rounded text-sm">
                                    Add to cart
                                </button>
                            </div>
                            <div className={'sm:w-1/4 pt-4 text-center'}>
                                <span className={'font-semibold text-2xl'}>616.00tk</span>
                            </div>
                        </div>
                    ))}
                </section>
                <div className={'sm:w-1/4'}>

                </div>


            </section>

            {/*<section className={'sm:w-2/4 mx-auto   my-20'}>*/}
            {/*    {[1,1,1,1].map((v,i)=>(*/}
            {/*          <div className={'flex border-2 mb-2 border-gray-500'}>*/}
            {/*                <div className={'sm:w-1/4 rounded-full'}>*/}
            {/*                    <img className={''} height={''} src={img_6}/>*/}
            {/*                </div>*/}
            {/*                <div className={'sm:w-2/4'}>*/}
            {/*                    <h2 className={'uppercase font-semibold pt-4'}>*/}
            {/*                        Noorjahani Biryani (Chicken)*/}
            {/*                    </h2>*/}
            {/*                    <span className={'text-2xl text-red-600'}>*****</span>*/}
            {/*                    <h4 className={'uppercase'}>Biryani</h4>*/}

            {/*                    <button className="w-16sm:w-3/6 mt-5 justify-center  mx-auto text-red-500 bg-white border-2 border-red-500 p-2 uppercase focus:outline-none hover:bg-red-500 hover:text-white rounded text-sm">*/}
            {/*                        Add to cart*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*                <div className={'sm:w-1/4 pt-4 text-center'}>*/}
            {/*                    <span className={'font-semibold text-2xl'}>616.00tk</span>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*</section>*/}

        </div>
    );
};

export default Catering;