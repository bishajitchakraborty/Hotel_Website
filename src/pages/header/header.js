import React, {useState} from 'react';
import classnames from 'classnames';
import logo from '../../../src/assets/image/logo1.png'
import {NavLink} from "react-router-dom";

const tab = [
    {
        name: "HOME",
        url:"/"
    },
    {
        name: "WHO WE ARE",
        url:"/about"
    },

    {
        name: "DINING",
        url:"/service"
    },
    {
        name: "GALLERY",
        url:"/gallery"
    },
    {
        name: "RESERVATION",
        url:"/reservation"
    },
    {
        name: "CONTACT US",
        url:"/contact"
    },
    {
        name: "LOGIN",
        url:"/login"
    },

]


const Header = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div>
            <section className={'w-full '}>
                <div className={'flex bg-indigo-600  md:items-center md:justify-between md:flex-row flex-col'}>
                    <div className={' py-4 flex justify-between'}>
                        <img className={'logo h-20 w-60'}  src={logo} alt=""/>
                        <div className={'hamburger md:hidden flex items-center pr-5'}>
                            <span onClick={()=>setOpenMenu(true)} className={`${openMenu?"hidden": ""} material-icons text-white`}> menu </span>
                            <span onClick={()=>setOpenMenu(false)} className={`${openMenu?"": "hidden"} material-icons text-white`}> close </span>
                        </div>
                    </div>

                    <div
                        className={openMenu?"menu-active": ""}>
                        <div className={"menu flex md:flex-row flex-col text-blue-500 hover:text-blue-800  md:justify-end "}>
                            {
                                tab.map((v, i) => (

                                    <NavLink to={v.url}
                                             onClick={() => setActiveTabIndex(i)}
                                             key={`profile-tab-${i}`}
                                             className={classnames(activeTabIndex === i ? "active" : "", "mx-4 pb-4 text-white underline-offset-8 hover:text-indigo-400")}
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