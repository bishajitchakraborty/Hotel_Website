import React from 'react';

const Reservation = () => {
    return (
        <div>
            <section className={'sm:w-3/5 flex mx-auto mt-16'}>
                <div className={'sm:w-3/4 w-full bg-slate-100 p-8'}>
                   <h2 className={'text-center italic text-green-900 text-4xl'}> Reservations</h2>
                    <h2 className={'text-center text-6xl'}>Online Booking</h2>
                    <p className={'text-center pt-10'}>
                        lease fill up the form below , with All your information, like Your Name , phone number etc and submit it for reserve a
                        table at our Restaurant. We will get your mail and response accordingly. Some body from our organization will contact you.
                        Thanks and visit again.
                    </p>
                    <div className={'flex p-2 pt-8'}>
                        <div className={'sm:w-1/2 p-2'}>
                            <label htmlFor="phone"
                                   className="leading-7 text-sm text-gray-600">Name(required)</label>
                            <input

                                type="text"  name="phone"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className={'sm:w-1/2 p-2'}>
                            <label htmlFor="phone"
                                   className="leading-7 text-sm text-gray-600">Phone(required)<span className={"text-xs text-red-500"}></span></label>
                            <input

                                type="text"  name="phone"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                        </div>
                    </div>
                    <div className={'flex p-2'}>
                        <div className={'sm:w-1/2 p-2'}>
                            <label htmlFor="phone"
                                   className="leading-7 text-sm text-gray-600">Email(required)</label>
                            <input

                                type="text"  name="phone"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className={'sm:w-1/2 p-2'}>
                            <label htmlFor="phone"
                                   className="leading-7 text-sm text-gray-600">Party Size(required)<span className={"text-xs text-red-500"}></span></label>
                            <input

                                type="text"  name="phone"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                        </div>
                    </div>
                    <div className={'flex p-2'}>
                        <div className={'sm:w-1/2 p-2'}>
                            <label htmlFor="phone"
                                   className="leading-7 text-sm text-gray-600">Select Date(required)</label>
                            <input

                                type="date"  name="phone"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className={'sm:w-1/2 p-2'}>
                            <label htmlFor="phone"
                                   className="leading-7 text-sm text-gray-600">Select Time(required)<span className={"text-xs text-red-500"}></span></label>
                            <input

                                type="text"  name="phone"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>

                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <button

                            className="w-full sm:w-3/6 mt-5 flex justify-center rounded-full mx-auto text-white bg-green-900 border-0 py-2 px-8 uppercase focus:outline-none hover:bg-indigo-600 rounded text-lg">submit</button>
                    </div>
                </div>

                <div className={'sm:w-1/4 w-full bg-green-900 p-16'}>
                    <div>
                        <h2 className={'italic text-lg text-center text-green-500'}>Opening</h2>
                        <h1 className={'text-center text-white text-5xl pb-2'}>Time</h1>
                        <p className={'text-center text-green-500 text-lg'}>Saturday to Friday</p>
                    </div>
                    <div className={'pt-24 text-center'}>
                        <span className="material-icons text-2xl text-center text-green-500">
                            call
                        </span>
                        <h1 className={'text-center text-white text-5xl pb-2'}>Hotline</h1>
                        <h1 className={'text-center text-green-500 text-xl pb-2'}>+8801978000001</h1>
                     </div>


                </div>
            </section>
        </div>
    );
};

export default Reservation;