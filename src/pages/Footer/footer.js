import React from 'react';
import {Container, Grid, Typography} from "@material-ui/core";
const Footer = () => {
    return (
        <div>
            <div className={'w-full bg-white mt-4 border-t-2 border-slate-300'}>
                <div className={'sm:w-3/4 flex mx-auto'}>
                    <div className={'sm:w-1/2 w-full'}>
                        <h2 className={'py-8 text-xl'}>  © 2021 Develop by Waysis-IT Solution</h2>
                    </div>
                    <div className={'sm:w-1/2 w-full flex'}>
                        <div className={'w-full py-8 pl-124'}>
                            <span className="material-icons text-4xl ">
                               facebook
                            </span>
                            <span className="material-icons text-4xl ">
                                 whatsapp
                            </span>
                            <span className="material-icons text-4xl">
                                whatsapp
                            </span>
                            <span className="material-icons text-4xl">
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