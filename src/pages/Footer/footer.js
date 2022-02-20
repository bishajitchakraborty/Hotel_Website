import React from 'react';
import logo from '../../../src/assets/image/logo1.png'
import {Container, Grid, Typography} from "@material-ui/core";
const Footer = () => {
    return (
        <div>
            <div className={'w-full bg-white mt-10 border-t-2 border-slate-300 sm:p-0 p-2'}>
                <div className={'sm:w-3/5 flex flex-wrap mx-auto h-32  '}>
                    <div className={'sm:w-3/4 flex flex-wrap w-full sm:justify-start justify-center' }>
                        <img className={'h-20 w-40  sm:pt-4'} src={logo}/>
                        <h2 className={' sm:text-xl text-sm  sm:pt-8'}>  © 2021 Develop by Waysis-IT Solution</h2>
                    </div>
                    <div className={'sm:w-1/4 w-full sm:pl-24 sm:pt-8 pt-4 text-center'}>
                        <span className="material-icons text-4xl sm:pr-2">
                               facebook
                            </span>
                        <span className="material-icons text-4xl pr-2">
                                 whatsapp
                            </span>
                        <span className="material-icons text-4xl pr-2">
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