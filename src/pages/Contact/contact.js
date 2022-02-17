import React from 'react';
import contact from '../../assets/image/contact.png'
const Contact = () => {
    return (
        <div>
            <section className={'sm:w-3/4 mx-auto mb-10 border border-gray-300 mt-20'}>
                <h2 className={'text-center  text-2xl font-semibold pt-4'}>Let's get in touch</h2>
                <div className={'flex m-2'}>
                    <div className={'sm:w-1/3 m-2 w-full text-center border border-gray-300 py-12'}>
                        <span className="material-icons text-2xl text-center text-indigo-600">
                            call
                        </span>
                        <h2>01800000000</h2>
                    </div>
                    <div className={'sm:w-1/3 m-2 w-full text-center border border-gray-300 py-12'}>
                        <span className="material-icons text-2xl text-center text-indigo-600">
                            email
                        </span>
                        <h2>01800000000</h2>
                    </div>
                    <div className={'sm:w-1/3 m-2 w-full border text-center border-gray-300 py-12'}>
                        <span className="material-icons text-2xl text-center text-indigo-600">
                            whatsapp
                        </span>
                        <h2>01800000000</h2>
                    </div>
                </div>
                <div className={'mx-auto flex flex-wrap  mt-4'}>
                    <div className={'sm:w-1/2 w-full '}>
                        <img src={contact}/>
                    </div>
                    <div className={'sm:w-1/2 w-full'}>
                        <div className={'p-2 px-8'}>

                                <input

                                    type="text"  name="phone" placeholder={'Enter Your Name'}
                                    className="my-8 w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                                <input

                                    type="email"  name="phone" placeholder={'Enter Your Email'}
                                    className=" mb-8 w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>


                                <input

                                    type="text"  name="phone" placeholder={'Subject'}
                                    className=" mb-8 w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>


                                <textarea

                                    type="text"  name="phone" placeholder={'Enter Your Message'}
                                    className=" mb-8 w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                            <div className="pb-10 w-full">
                                <button

                                    className="w-full sm:w-3/6 mt-5 flex justify-center rounded-full mx-auto text-white bg-indigo-600 border-0 py-2 px-8 uppercase focus:outline-none hover:bg-indigo-700 rounded text-lg">submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Contact;