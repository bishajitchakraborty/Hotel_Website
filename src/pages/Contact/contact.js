import React from 'react';
import contact from '../../assets/image/contact.png'
const Contact = () => {
    return (
        <div>
            <div className={'w-full bg-blue-900 py-10 mb-16 text-white'}>
                <div className={'w-3/5 mx-auto '}>
                    <h2 className={'text-4xl pt-4 '}>Get in Touch</h2>
                    <p className={'text-xl py-4'}>Just drop us a line. We will be glad to answer your enquries. </p>
                </div>

            </div>

            <div className={'w-3/5 mx-auto bg-red-500 flex mb-10 sm:border-4 border-gray-500'}>
                <div className={'sm:w-1/3 p-4 w-full bg-blue-900 pb-10 border-r-4 border-gray-500 text-white'}>
                    <h2 className={'text-xl py-8'}>Contact Information</h2>
                    <div className={'flex pb-4'}>
                        <div className={'w-1/5'}>
                            <span className="material-icons text-2xl text-center ">
                               location_on
                            </span>
                        </div>
                        <div className={'w-3/5 pb-4'}>
                            Makepe, RUE TAMPICO BP 5614 Douala-Cameroon
                        </div>
                    </div>
                    <div className={'flex pb-4'}>
                        <div className={'w-1/5'}>
                                    <span className="material-icons text-2xl text-center ">
                                       email
                                    </span>
                        </div>
                        <div className={'w-3/5'}>
                            admin@email.com
                        </div>
                    </div>
                    <div className={'flex pb-4'}>
                        <div className={'w-1/5'}>
                                <span className="material-icons text-2xl text-center ">
                                   call
                                </span>
                        </div>
                        <div className={'w-3/5'}>
                            +8801856043854,+88001000000001
                        </div>
                    </div>
                    <div className={'flex'}>
                        <div className={'w-1/5'}>
                            <span className="material-icons text-2xl text-center ">
                               whatsapp
                            </span>
                        </div>
                        <div className={'w-3/5'}>
                            admin@email.com
                        </div>
                    </div>
                    <div className={'w-full flex py-10 pt-24'}>
                        <span className="material-icons text-4xl text-center ">
                                   facebook
                        </span>
                        <span className="material-icons text-4xl text-center ">
                            email
                        </span>
                        <span className="material-icons text-4xl text-center ">
                            play_circle_filled
                        </span>
                        <span className="material-icons text-4xl text-center ">
                            whatsapp
                        </span>
                    </div>
                </div>
                <div className={'sm:w-2/3 w-full pb-10 p-4 '}>
                    <div className={'flex py-8 px-4 text-white'}>
                        <h2 className={'sm:w-1/2 w-full text-xl full '}>Send us a Message</h2>
                        <span className="sm:w-1/2 material-icons text-4xl text-right ">
                            email
                        </span>
                    </div>

                    <div className={'flex px-4  py-4'}>
                            <div className={'sm:w-1/2 w-full  pr-2'}>
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                       htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input
                                    className="appearance-none bg-transparent border-b w-full text-gray-700 mr-3 py-1  leading-tight focus:outline-none"
                                    type="text" placeholder="Fast Name" aria-label="Full name"/>
                            </div>
                            <div className={'sm:w-1/2 w-full  pl-2'}>
                                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                       htmlFor="grid-first-name">
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none bg-transparent border-b w-full text-white mr-3 py-1 leading-tight focus:outline-none"
                                    type="text" placeholder="Last Name" aria-label="Full name"/>
                            </div>
                    </div>
                    <div className={'flex px-4 py-4'}>
                        <div className={'sm:w-1/2 w-full pr-2'}>
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                Email
                            </label>
                            <input
                                className="appearance-none bg-transparent border-b w-full text-white mr-3 py-1  leading-tight focus:outline-none"
                                type="text" placeholder="Email" aria-label="Full name"/>
                        </div>
                        <div className={'sm:w-1/2 w-full pl-2'}>
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                Subject
                            </label>
                            <input
                                className="appearance-none bg-transparent border-b w-full text-white mr-3 py-1  leading-tight focus:outline-none"
                                type="text" placeholder="Subject" aria-label="Full name"/>
                        </div>
                    </div>
                    <div className={'px-4 py-4'}>
                        <div className={'w-full pr-2'}>
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                Message
                            </label>
                            <textarea
                                className="appearance-none bg-transparent border-b w-full text-gray-700 mr-3 py-1  leading-tight focus:outline-none"
                                type="text" placeholder="How can we help you?" aria-label="Full name"/>
                        </div>
                    </div>
                    <div className="pb-10 w-full px-4">
                            <button
                                className="w-full w-32 mt-5 flex justify-center rounded-xl  text-white bg-indigo-600 border-0 py-2 px-8 uppercase focus:outline-none hover:bg-indigo-700 rounded text-lg">submit</button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Contact;