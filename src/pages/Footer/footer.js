import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../../../src/assets/image/Scrolling.svg";
import {NavLink} from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <div className={'w-full border-y bg-blue-700  border-white-500 md:p-0 p-2'}>
                <div className={'sm:w-3/5 flex py-12 text-white flex-wrap mx-auto'}>
                    <div className={'md:w-1/3 w-full text-sm'}>
                        <h2 className={'font-semibold pb-4'}>Quick Links</h2>
                        <NavLink  to={'/'}><p className={'pb-2'}>Overview</p></NavLink>
                        <NavLink  to={'/gallery'}><p className={'pb-2'}>Reservation</p></NavLink>
                        <NavLink  to={'/reservation'}><p className={'pb-2'}>Gallery</p></NavLink>
                        <NavLink  to={'/catering'}><p className={'pb-2'}>Dining</p></NavLink>
                        <NavLink  to={'/signup'}><p className={'pb-2'}>SignUp</p></NavLink>
                    </div>
                    <div className={'md:w-1/3 w-full text-sm'}>
                        <h2 className={'font-semibold pb-4'}>Quick Links</h2>
                        <NavLink  to={'/contact'}><p className={'pb-2'}>Contact Us</p></NavLink>
                        <NavLink  to={'/review'}><p className={'pb-2'}>Review</p></NavLink>
                        <NavLink  to={'/login'}><p className={'pb-2'}>SignIn</p></NavLink>



                    </div>
                    <div className={'md:w-1/3 w-full text-sm'}>
                        <h2 className={'font-semibold pb-4'}>Contact Us</h2>
                        <p className={'pb-2'}>
                            Makepe, RUE TAMPICO BP 5614 Douala-Cameroon
                        </p>
                        <p className={'pb-2'}>admin@gmail.com</p>
                        <p className={'pb-2'}>8801000000001</p>

                    </div>
                </div>
            </div>
            <div className={'w-full bg-blue-700 border border-slate-300 sm:p-0 p-2'}>
                <ScrollToTop smooth top="20"  component={<MySVG/>}/>
                <div className={'sm:w-3/5 flex flex-wrap mx-auto py-8  items-center'}>
                    <div className={'md:w-1/3  flex flex-wrap w-full md:justify-start justify-center '}>
                        <h1 className={'border-2 border-white text-white rounded p-2  text-2xl font-bold uppercase'}>Hotel Logo</h1>
                    </div>
                    <div className={'md:w-1/3'}>
                        <h2 className={' sm:text-xl text-white text-sm pl-4 text-center'}>  © 2021 Develop by Waysis-IT Solution</h2>
                    </div>
                    <div className={'md:w-1/3 w-full sm:pl-24 text-white text-center'}>
                        <span className="material-icons text-4xl ">
                               facebook
                        </span>
                        <span className="material-icons text-4xl ">
                                 whatsapp
                        </span>
                        <span className="material-icons text-4xl ">
                                whatsapp
                        </span>
                        <span className="material-icons text-4xl ">
                                whatsapp
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;