import React from 'react';
import {Container, Grid, Typography} from "@material-ui/core";

const Footer = () => {
    return (
        <div>
            <div className={'copyright_section bg-my-primary'}>
                <div className={'w-11/12 sm:w-3/4 mx-auto'}>
                    <Grid container>
                        <Grid item sm={6} className={'copyright'}>
                            <Typography component={"p"}>
                                ©2020 - 2021 Orange Property Lid. All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} className={'developer'}>
                            <Typography className={"text-blue-900"} align={"right"}>
                                <Typography className={'social '} component={"div"} >
                                    <a href="https://www.facebook.com/koushikStack" target={'_blank'} className={'icon shadow border  '}><i className="fab fa-facebook-f "/></a>
                                    <a href="https://www.linkedin.com/in/koushik-chandra-sarker/" target={'_blank'} className={'icon shadow border'}><i className="fab fa-linkedin-in"/></a>
                                    <a href="https://github.com/koushik-stack" target={'_blank'} className={'icon shadow border'}><i className="fab fa-github"/></a>
                                </Typography>
                                <Typography component={"p"} >
                                    Developed by<b>Waysis IT Solution</b>
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Footer;