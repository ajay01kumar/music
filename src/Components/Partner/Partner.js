import Grid from '@mui/material/Grid/Grid'
import { Box } from '@mui/system'
import React from 'react'
import partner_banner from "../../Asserts/partner_banner.png"
import drivemore from "../../Asserts/drivemore.png"
import sendrealtimeupdate from "../../Asserts/sendrealtimeupdate.png"
import easytoshedule from "../../Asserts/easytoshedule.png"

export default function Partner() {
    return (
        <Box>
            <Grid container >
                <Grid item xs={12} sm={12} lg={12} xl={12} >
                    <img width="100%" alt='partner_banner' src={partner_banner}></img>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12} >
                    <img width="100%" alt='drivemore' src={drivemore}></img>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12} >
                    <img width="100%" alt='sendrealtimeupdate' src={sendrealtimeupdate}></img>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} xl={12} >
                    <img width="100%" alt='easytoshedule' src={easytoshedule}></img>
                </Grid>


            </Grid>
        </Box>
    )
}
