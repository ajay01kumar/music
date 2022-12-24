import { Box, Grid } from '@mui/material'
import React from 'react'
import Banner from "../../Asserts/homebanner.png"
import realtimeupdates from "../../Asserts/realtimeupdates.png"
import "./BannersPage.css"
export default function BannersPage() {
    return (
        <Box>
            <Grid container>
                <Grid xs={12} className="bannner" sm={12} lg={12} xl={12} >
                    <img width="100%" alt='bannner' src={Banner}>
                    </img>
                    
                    {/* <Grid class="text-block">
                        <Button style={{
                            borderRadius: 10,
                            backgroundColor: "black",
                            // padding: "18px 36px",
                            // fontSize: "18px"
                        }} variant='contained'>
                            <AppleIcon />
                            Download From app store</Button>
                    </Grid> */}
                </Grid>
                {/* <Grid xs={12} sm={12} lg={12} xl={12} className='appleButtn'>
                        <img width="90%" alt='AppleAppStoreIcon' src={AppleAppStoreIcon}></img>
                    </Grid> */}
                <Grid xs={12} sm={12} lg={12} xl={12} item >
                    <img width="100%" alt='realtimeupdates' src={realtimeupdates}></img>
                </Grid>
            </Grid>
        </Box >
    )
}
