import React, {useState} from 'react';
import classnames from 'classnames';
import {NavLink} from "react-router-dom";

const tab = [
    {
        name: "Overview",
        url:"/"
    },
    {
        name: "Who We Are",
        url:"/about"
    },

    {
        name: "Dining",
        url:"/catering"
    },
    {
        name: "Gallery",
        url:"/gallery"
    },
    {
        name: "Reservation",
        url:"/reservation"
    },
    {
        name: "Contact Us",
        url:"/contact"
    },
    {
        name: "Login",
        url:"/login"
    },
    {
        name: "Review",
        url:"/review"
    },

]


const Header = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div>
            <section className={'w-full '}>
                <div className={'flex bg-blue-700  md:items-center md:justify-between md:flex-row flex-col px-4'}>
                    <div className={' py-4 flex justify-between'}>
                        <NavLink to={'/'}>
                            <h1 className={'border-2 border-white rounded p-2 text-2xl text-white font-bold uppercase'}>Hotel Logo</h1>
                        </NavLink>
                        <div className={'hamburger md:hidden flex items-center pr-5'}>
                            <span onClick={()=>setOpenMenu(true)} className={`${openMenu?"hidden": ""} material-icons text-black`}> menu </span>
                            <span onClick={()=>setOpenMenu(false)} className={`${openMenu?"": "hidden"} material-icons text-black`}> close </span>
                        </div>
                    </div>

                    <div
                        className={openMenu?"menu-active": ""}>
                        <div className={"menu flex md:items-center md:flex-row flex-col text-white hover:text-blue-800  md:justify-end  "}>
                            {
                                tab.map((v, i) => (
                                    <NavLink to={v.url}
                                             onClick={() => setActiveTabIndex(i)}
                                             key={`profile-tab-${i}`}
                                             className={classnames(activeTabIndex === i ? "active border-b-2 border-white" : "", "mx-4 pb-4 text-white underline-offset-8 hover:text-gray-800 ")}
                                    >
                                        {v.name}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Header;