import React from "react";
import {  Box, Grid } from "@mui/material";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import Partner from "./Components/Partner/Partner";
import AboutUs from "./Components/HomePage/AboutUs";
import ContactUs from "./Components/HomePage/ContactUs";

export default function Layout() {
    return (
        <Box className="App" >
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <main style={{ marginTop: "65px" }}>
                        <Routes>
                            <Route path="/" element={<HomePage />}></Route>
                            <Route path="/Home" element={<HomePage />}></Route>
                            <Route path="/Partner" element={<Partner />}></Route>
                            <Route path="/AboutUs" element={<AboutUs />}></Route>
                            <Route path="/ContactUs" element={<ContactUs />}></Route>
                        </Routes>
                    </main>
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>

    );
}
