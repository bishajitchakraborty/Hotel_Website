import React from 'react';

import {Container, Grid, Typography} from "@material-ui/core";
const Footer = () => {
    return (
        <div>
            <div className={'w-full bg-white mt-4 border-t-2 border-slate-300'}>
                <div className={'sm:w-3/5 flex mx-auto'}>
                    <div className={'w-full justify-center flex py-8'}>
                        <h2 className={' text'}>  © 2021 Develop by Waysis-IT Solution</h2>
                        <div className={'pl-16'}>
                            <span className="material-icons text-2xl pr-2">
                               facebook
                            </span>
                            <span className="material-icons text-2xl pr-2">
                                 whatsapp
                            </span>
                            <span className="material-icons text-2xl pr-2">
                                whatsapp
                            </span>
                            <span className="material-icons text-2xl ">
                                whatsapp
                            </span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;