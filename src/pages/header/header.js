import React, {useState} from 'react';
import classnames from 'classnames';
import logo from '../../../src/assets/image/logo.png'
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
    // {
    //     name: "OUR MENU",
    //     url:"/menu"
    // },
    {
        name: "CATERING SERVICE",
        url:"/service"
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
    // {
    //     name: "CART",
    //     url:"/cart"
    // },
]
const Header = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    return (
        <div>
            <section className={'w-full '}>
                <div className={'flex bg-white  items-center justify-between'}>
                    <div className={'justify-start pl-16 py-4'}>
                        <img className={'logo '} height={"80px"} src={logo} alt=""/>
                    </div>
                    <div
                        className="flex justify-end ">
                        {
                            tab.map((v, i) => (

                                <NavLink to={v.url}
                                    onClick={() => setActiveTabIndex(i)}
                                    key={`profile-tab-${i}`}
                                    className={classnames(activeTabIndex === i ? "active" : "", "mx-4 pb-4 text-black underline-offset-8 text-blue-400 hover:text-blue-900")}
                                >
                                    {v.name}
                                </NavLink>
                            ))
                        }

                    </div>
                </div>

            </section>

        </div>
    );
};

export default Header;