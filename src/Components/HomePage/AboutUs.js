import { Box, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import './AboutUs.css';

export default function AboutUs() {
    return (
        <Paper>
            <Box>

                <Grid container >
                    <Grid className='aboutUsHead' item xs={12} sm={12} lg={12} xl={12}>
                        <Typography sx={{ fontWeight: 'bold' }} variant="h4" color="#0053ff">
                            ABOUT US
                        </Typography>
                    </Grid>
                    <Container fixed>
                        <Grid item xs={12} sm={12} lg={12} xl={12} >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="#0053ff">
                                What is FixNow?
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} xl={12} >
                            <Typography variant="h6" >
                                FixNow is a network of partnered vehicle service centres, providing a seamless service experience at your fingertips. We've built a userfriendly mobile application, that allows you to easily find and choose a mechanic that best suits your needs.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} xl={12} >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="#0053ff">
                                Where can I book vehicle service with FixNow?
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} xl={12} >
                            <Typography variant="h6" >
                                You can book directly from our exlusive mobile appliction, available
                                directly from the IOS appstore.                        </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} xl={12} >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="#0053ff">
                                How to book a vehicle service with FixNow?
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} xl={12} >
                            <Typography variant="h6" >
                                <div> We have made booking an appointment a few clicks away:</div>
                                Select your car’s make, model and year, select the type of car service
                                you require,
                                <div>
                                    Choose your preferred time slot and your all set! No
                                    more wasting time looking through dozens of shops.
                                </div>
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} xl={12} >
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }} color="#0053ff">
                                Do I have to pay before the service?
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} xl={12} >
                            <Typography variant="h6" >
                                In case you're wondering, no, we don't require a down payment. We
                                make it easy to pay once your car is serviced and inspected by our
                                professionals. We offer flexible payment options for your ease                        </Typography>
                        </Grid>

                    </Container>
                </Grid>

            </Box>
        </Paper>
    )
}
