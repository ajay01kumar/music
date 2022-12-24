import { Box,  Card, CardContent,  Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import "./ServiceAndBooking.css"
import selectservice from "../../Asserts/selectservice.png"
import selectshop from "../../Asserts/selectshop.png"
import bookappointment from "../../Asserts/bookappointment.png"
import one from "../../Asserts/1.png"
import two from "../../Asserts/2.png"
import three from "../../Asserts/3.png"
import exploreservice from "../../Asserts/exploreservice.png"
import becomeapartner from "../../Asserts/becomeapartner.png"
import usefixnowapp from "../../Asserts/usefixnowapp.png"
import arrow from "../../Asserts/arrow.png"

export default function ServiceAndBooking() {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={12} >
                    <Typography sx={{ fontSize: 24 }} className='service' > Get it all done... Without having to</Typography>
                    <Typography sx={{ fontSize: 24 }} className='service' >go anywhere</Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} >
                    <Container >
                        <Grid item container spacing={2}>
                            <Grid className='service' item xs={12} sm={4}>
                                <Card sx={{ maxWidth: "90%" }} style={{ borderRadius: 10, border: "1px solid blue" }}>
                                    <Grid container style={{ padding: "10px" }} spacing={2}>
                                        <Grid item xs={3} sm={3} lg={3} >
                                            <img src={one} alt="one" width="50%"></img>
                                        </Grid>
                                        <Grid item xs={9} sm={9} lg={9} >
                                            <img src={selectservice} alt="selectservice" width="90%"></img>
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={12}>
                                            <CardContent>
                                                <Typography gutterBottom className='service' style={{ color: "blue" }} variant='h5' component="div">
                                                    Select Service
                                                </Typography>
                                                <Typography variant="body2" sx={{ fontSize: 16 }} color="text.secondary">
                                                    Your choice of professional &
                                                    convenient mobile services:
                                                    oil change, detailing, tire repair
                                                </Typography>
                                            </CardContent>
                                        </Grid>

                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid className='service' item xs={12} sm={4}>
                                <Card sx={{ maxWidth: "90%" }} style={{ borderRadius: 10, border: "1px solid blue" }}>
                                    <Grid container style={{ padding: "10px" }} spacing={2}>
                                        <Grid item xs={3} sm={3} lg={3} >
                                            <img  src={two} alt="two" width="50%"></img>
                                        </Grid>
                                        <Grid item xs={9} sm={9} lg={9} >
                                            <img src={selectshop} alt ="selectshop" width="90%"></img>
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={12}>
                                            <CardContent>
                                                <Typography gutterBottom className='service' style={{ color: "blue" }} variant='h5' component="div">
                                                    Select Shop
                                                </Typography>
                                                <Typography variant="body2" sx={{ fontSize: 16 }} color="text.secondary">
                                                    Make you selection from any one
                                                    of the professional service
                                                    companies listed on
                                                    the results screen
                                                </Typography>
                                            </CardContent>
                                        </Grid>

                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid className='service' item xs={12} sm={4}>
                                <Card sx={{ maxWidth: "90%" }} style={{ borderRadius: 10, border: "1px solid blue" }}>
                                    <Grid container style={{ padding: "10px" }} spacing={2}>
                                        <Grid item xs={3} sm={3} lg={3} >
                                            <img src={three} alt="three" width="50%"></img>
                                        </Grid>
                                        <Grid item xs={9} sm={9} lg={9} >
                                            <img src={bookappointment} alt="bookappointment" width="90%"></img>
                                        </Grid>
                                        <Grid item xs={12} sm={12} lg={12}>
                                            <CardContent>
                                                <Typography gutterBottom className='service' style={{ color: "blue" }} variant='h5' component="div">
                                                    Select Shop

                                                </Typography>
                                                <Typography variant="body2" sx={{ fontSize: 16 }} color="text.secondary">
                                                    Make you selection from any one
                                                    of the professional service
                                                    companies listed on
                                                    the results screen
                                                </Typography>
                                            </CardContent>
                                        </Grid>

                                    </Grid>
                                </Card>
                            </Grid>

                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <Grid item xs={12} sm={12} lg={12} className='service'>
                        <Typography sx={{ fontSize: 24 }}  > <span className='OneStopSolution'>“</span>One Stop Solution<span className='OneStopSolution'>”</span> </Typography>
                        <br /><br /><br />
                        <Typography sx={{ fontSize: 24 }}  >For your vehicle</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3} lg={3}>
                    <Grid xs={12} sm={12} lg={12} >
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <img src={exploreservice} alt="exploreservice" width="50%"></img>
                        </Grid>
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <Typography sx={{ fontSize: 24 }}  > EXPLORE </Typography>
                        </Grid>
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <Typography sx={{ fontSize: 24 }}  > OUR SERVICES </Typography>
                        </Grid>
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <Typography className='serviceSmall'  > Find Mechanics Near You </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={1.5} lg={1.5} className="arrow">
                    <img src={arrow} alt="arrow" width="50%" className='arrow-img'></img>
                </Grid>
                <Grid item xs={12} sm={3} lg={3}>
                    <Grid xs={12} sm={12} lg={12} >
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <img src={becomeapartner} alt="becomeapartner" width="50%"></img>
                        </Grid>
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <Typography sx={{ fontSize: 24 }}  > BECOME A </Typography>
                        </Grid>
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <Typography sx={{ fontSize: 24 }}  > PARTNER </Typography>
                        </Grid>
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <Typography className='serviceSmall'  > SignUp your shop </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={1.5} lg={1.5} className="arrow">
                    <img src={arrow} alt="arrow" className='arrow-img'  width="50%"></img>
                </Grid>
                <Grid item xs={12} sm={3} lg={3}>
                    <Grid xs={12} sm={12} lg={12} >
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <img src={usefixnowapp} alt="usefixnowapp" width="50%"></img>
                        </Grid>
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <Typography sx={{ fontSize: 24 }}  > USE </Typography>
                        </Grid>
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <Typography sx={{ fontSize: 24 }}  > FixNow APP </Typography>
                        </Grid>
                        <Grid xs={12} sm={12} lg={12} className='service'>
                            <Typography className='serviceSmall'  > Get the app now </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
