import React from "react";
import Box from "@mui/material/Box";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import logo from "../../Asserts/logFixNow.jpeg"
import { Container } from "@mui/system";
import linkedin_B from "../../Asserts/linkedin_B.png"
import insta_B from "../../Asserts/insta_B.png"
import facebook_B from "../../Asserts/facebook_B.png"
import twitter_B from "../../Asserts/twitter_B.png"
import youtube_B from "../../Asserts/youtube_B.png"

// const footers = [
//     {
//         title: 'Top Cities Near You',
//         description: ['Austin', 'Dallas', 'Houston', 'El Paso'],
//     },
//     {
//         title: 'Top Rated Shops Near You',
//         description: [
//             'Barts Auto Shop',
//             'Jiffy Lube',
//             'Sai’s Wheel and Tire',
//             'Jeff’s Car Repair',
//             'Pep Boys',
//         ],
//     },
//     {
//         title: 'Get To Know Us',
//         description: ['About Us', 'Investors', 'Contact Us', 'FAQ'],
//     },
//     // {
//     //     title: 'Get To Know Us',
//     //     description: ['About Us', 'Investors', 'Contact Us', 'FAQ'],
//     // },

// ];


export default function Footer() {

    return (
        <Box>
            <Grid container bgcolor="#f7f7f8">
                <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                <CssBaseline />
                <Container>
                    <Grid container spacing={2} justifyContent="space-evenly">
                        <Grid item spacing={2} xs={12} sm={8} lg={8} xl={8}>

                            <Grid item xs={12} sm={12} lg={6} xl={6}>
                                <Typography mt={2}>
                                    <img src={logo} width="30%" alt="logo"></img>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} lg={12} xl={12}>
                                <Typography sx={{ fontSize: 18 }}>  FixNow is the most convenient car repair option</Typography>
                                <Typography sx={{ fontSize: 18 }}>  available. One-click and your car is picked up,</Typography>
                                <Typography sx={{ fontSize: 18 }}>  repaired, and delivered anywhere you are. Focus on</Typography>
                                <Typography sx={{ fontSize: 18 }}>   you! We've got your car.</Typography>
                            </Grid>
                            <Grid style={{ paddingTop: "20px" }} xs={12} sm={12} lg={12} xl={12}>
                                {/* <img src={} width="30%" alt="logo"></img> */}
                                {/* <img width="5%" alt='linkedin_B' src={linkedin_B}></img> */}
                            </Grid>

                            
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4} xl={4}>
                            <Grid xs={12} sm={12} lg={12} xl={12}>
                                <Typography sx={{ fontSize: 20 }} color="blue" style={{ textDecorationLine: "underline" }} > GET TO KNOW US</Typography>
                            </Grid>
                            <Grid xs={12} sm={12} lg={12} xl={12}>
                                <List sx={{
                                    listStyleType: 'disc',
                                    pl: 10,
                                    '& .MuiListItem-root': {
                                        display: 'list-item',
                                    },
                                }}>
                                    <ListItem >
                                        <ListItemText primary="About Us" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Investors" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Terms of Service " />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Privacy" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Shop Locations " />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="2022 FixNow TM" />
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid container >
                <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                <CssBaseline />
                <Grid  container spacing={2} justifyContent="space-evenly">
                <Grid container style={{ paddingTop: "20px" }} >
                                <Grid item xs={1} sm={1} lg={1} xl={1}>
                                    <img width="20%" alt='linkedin_B' src={linkedin_B}></img>
                                </Grid>
                                <Grid item xs={1} sm={1} lg={1} xl={1}>
                                    <img width="20%" alt='insta_B' src={insta_B}></img>
                                </Grid>
                                <Grid item xs={1} sm={1} lg={1} xl={1}>
                                    <img width="20%" alt='facebook_B' src={facebook_B}></img>
                                </Grid>
                                <Grid item xs={1} sm={1} lg={1} xl={1}>
                                    <img width="20%" alt='twitter_B' src={twitter_B}></img>
                                </Grid>
                                <Grid item xs={1} sm={1} lg={1} xl={1}>
                                    <img width="20%" alt='youtube_B' src={youtube_B}></img>
                                </Grid>
                            </Grid>
                    <h5 style={{color:"#808080"}} color="#" > Copyright © FixNow. 2022-2023 All right reserved</h5>
                </Grid>
            </Grid>
        </Box>

    );
}
