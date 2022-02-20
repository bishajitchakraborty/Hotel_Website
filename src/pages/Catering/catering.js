import React from 'react';
import img_5 from "../../assets/image/img_5.png";
import about from "../../assets/image/about.jpg";
import promotion from "../../assets/image/promotions.webp";
import img_6 from "../../assets/image/img_6.png";

const Dining = () => {
    return (
        <div>
            <section className={'w-full sm:p-0 p-2'}>
                <div className={'flex sm:w-3/5 w-full mx-auto relative  h-96 object-cover items-center  justify-center '}
                     style={{backgroundImage: `url(${img_5})`}}>
                    <div className={'w-1/2 sm:pl-12 text-center'}>
                                {/*<span className={'italic text-2xl text-lime-200'}>*/}
                                {/*    Welcome to*/}
                                {/*</span>*/}
                        {/*<h2 className={'font-semibold sm:text-4xl text-white uppercase text-amber-700 text-center'}>Grand Restaurant Menu</h2>*/}
                    </div>
                </div>
            </section>

            <div className={'sm:w-3/5 w-full mx-auto sm:p-0 p-2'}>
                <div className={'mt-16 '}>
                    <p className={'text-sm text-center pb-4 text-gray-500'}>DINING AT XYZ DHAKA</p>
                    <h1 className={'sm:text-4xl text-xl text-center pb-16'}>Enjoy Food and Drinks Offered at XYZ Dhaka</h1>
                    <h2 className={'text-center sm:text-xl text-sm text-gray-500 pb-6'}>AT THIS HOTEL</h2>
                </div>
                <div>
                    {
                        [1,1,1].map((v,i)=>
                            <div className={'bg-white-500 shadow-lg shadow-white-500/50 p-8 rounded-xl '}>
                                <h2 className={'text-xl  pb-2'}>Favola</h2>
                                <p className={'text-xs pb-2'}>Italien</p>
                                <p className={'pb-6 text-sm'}>
                                    Experience a taste of Italy while visiting Dhaka. Favola, our on-site Italian restaurant, boasts the look and feel of a classic Italian trattoria.
                                    We serve pastas, wood-fired pizzas, traditional antipasti and more.
                                </p>
                                <div className={'flex pb-10'}>
                               <span className="material-icons">
                                    watch_later
                               </span>
                                    <h4 className={'px-4'}>Everyday</h4>
                                    <h4>6.00 PM-11.30 PM</h4>
                                </div>
                            </div>
                        )}
                </div>


            </div>

        </div>
    );
};

export default Dining;