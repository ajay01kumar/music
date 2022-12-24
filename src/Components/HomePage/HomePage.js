import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import FixNowWeb from "../../Asserts/fixNow_Web-1.png"
import AboutUs from './AboutUs'
import BannersPage from './BannersPage'
import ContactUs from './ContactUs'
import ServiceAndBooking from './ServiceAndBooking'
import joinwishlistbackground from "../../Asserts/joinwishlist background.png"
import findshopsbackground from "../../Asserts/findshopsbackground.png"
import "./HomePage.css"
export default function HomePage() {
    return (
        <Box>
            <Grid container >
                <Grid item xs={12} sm={12} lg={12} xl={12} >
                    <BannersPage />
                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12} >
                    <ServiceAndBooking />
                </Grid>
                {/* joinwishlistbackground Img */}
                <Grid item className='container' >
                    <img width="100%" alt='joinwishlistbackground' src={joinwishlistbackground}></img>
                    <Grid className="centered">
                        <Grid item xs={12} sm={12} lg={12} xl={12}>
                            <Typography sx={{ fontSize: 24 }} > <span className='letsGetStarted'>“</span>Let’s Get Starteds<span className='letsGetStarted'>”</span> </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} xl={12}>
                            <Typography  > Find Local, trustworthy </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} xl={12}>
                            <Button style={{  backgroundColor: "#0051f8"}} variant='contained'>Get App</Button>
                        </Grid>
                    </Grid>
                    {/* <div class="centered">Centered</div> */}

                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12} className='containerFindshopsbackground'>
                    <img width="100%" alt='findshopsbackground' src={findshopsbackground}></img>
                    <Grid className="centeredFindshopsbackground">
                        <Grid item xs={12} sm={12} lg={12} xl={12}>
                            <Typography sx={{ fontSize: 28 }} > <span className='letsGetStarted'>“</span>Experienced
                                <div>
                                    Mechanics<span className='letsGetStarted'>”</span> </div></Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} xl={12}>
                            <p> Choose a mechanic of</p>
                            <p> your choice from dozens</p>
                            <p>   of local shops near you. </p>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} xl={12}>
                            <Button style={{  backgroundColor: "#0051f8"}} variant='contained'>FIND SHOPS NEAR YOU
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12}>
                    <img width="100%" alt='FixNowWeb' src={FixNowWeb}></img>
                </Grid>

                <Grid item xs={12} sm={12} lg={12} xl={12}>
                    <Paper>
                    <AboutUs />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12}>
                    <Paper>
                        <ContactUs />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}
