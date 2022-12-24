import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import "./header.css"
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Asserts/logFixNow.jpeg"

import {
    Grid,
} from "@mui/material";

const pages = [
    {
        name: "Home",
        url: "/"
    },
    { name: "Partner", url: "/Partner" },
    { name: "About Us", url: "/AboutUs" },
    { name: "Contact Us", url: "/contactUs" },
    // { name: "FAQ's", url: "/faq" },
];
export default function Header() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    //const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <div className="Container">
            <AppBar position="fixed" color="default">
                <Container maxWidth="auto" sx={{ backgroundColor: "white" }}>
                    <Toolbar disableGutters>
                        <Grid
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "flex" },
                                // fontWeight: 700,
                                height: "50px",
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            {/* <Typography variant="h6" noWrap component="a" href="/"> */}

                            <img src={logo} alt=""></img>
                            {/* </Typography> */}
                        </Grid>
                        <Box sx={{ flexGrow: 1, display: { xs: "", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        style={{ paddingLeft: "10px", align: "right" }}
                                        color="primary"
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Link style={{ textDecoration: 'none', color: "black" }} to={page.url}>
                                            <Typography sx={{ fontSize: "13px", width: "140px" }} >
                                                {page.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: "8px" }} >
                                                {page.subtext}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            style={{ component: "a" }}
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "flex" },
                                flexGrow: 1,
                                height: "40px",
                                // fontWeight: 700,
                                letterSpacing: ".5rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <Link to="/">{/* <img src={logo1} alt=""></img> */}</Link>
                        </Typography>
                        <Box style={{ width: "150px" }}></Box>
                        <Grid
                            container
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            <Grid item xs={12} sm={12} align="center">
                                <Grid container spacing={2}>
                                    <Grid item sm={2}>
                                        <Typography
                                            // onMouseEnter={handleMouseEnter}
                                            // onMouseLeave={handleMouseLeave}
                                            // padding="3px"
                                            align="center"
                                            sx={{
                                                fontSize: "18px",
                                                // fontWeight: "bold",
                                                color: "red",
                                            }}
                                        >
                                            <NavLink
                                                style={({ isActive }) => ({
                                                    textDecoration: isActive ? 'solid underline #0052ff 4px ' : 'none',
                                                })}
                                                to="/Home">Home</NavLink>
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={2} align="left">
                                        <Typography
                                            // onMouseEnter={handleMouseEnter}
                                            // onMouseLeave={handleMouseLeave}
                                            // padding="3px"
                                            align="center"
                                            sx={{
                                                fontSize: "18px",
                                                // fontWeight: "bold",
                                                color: "darkblue",
                                            }}
                                        >
                                            <NavLink
                                                style={({ isActive }) => ({
                                                    textDecoration: isActive ? 'solid underline #0052ff 4px ' : 'none',
                                                })}
                                                to="/Partner">Partner</NavLink>
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={2} align="left">
                                        <Typography
                                            // onMouseEnter={handleMouseEnter}
                                            // onMouseLeave={handleMouseLeave}
                                            // padding="3px"
                                            align="center"
                                            sx={{
                                                fontSize: "18px",
                                                // fontWeight: "bold",
                                                color: "darkblue",
                                            }}
                                        >
                                            <NavLink
                                                style={({ isActive }) => ({
                                                    textDecoration: isActive ? 'solid underline #0052ff 4px ' : 'none',
                                                })}
                                                to="/AboutUs">About Us</NavLink>
                                        </Typography>
                                    </Grid>

                                    <Grid item sm={2}>
                                        <Typography
                                            // onMouseEnter={handleMouseEnter}
                                            // onMouseLeave={handleMouseLeave}
                                            // padding="3px"
                                            align="center"
                                            sx={{
                                                fontSize: "18px",
                                                // fontWeight: "bold",
                                                color: "darkblue",
                                            }}
                                        >
                                            <NavLink
                                                style={({ isActive }) => ({
                                                    textDecoration: isActive ? 'solid underline #0052ff 4px ' : 'none',
                                                })}
                                                to="/ContactUs">Contact Us</NavLink>
                                        </Typography>
                                    </Grid>
                                    {/* <Grid item sm={2}>
                                        <Typography
                                            // onMouseEnter={handleMouseEnter}
                                            // onMouseLeave={handleMouseLeave}
                                            padding="3px"
                                            align="center"
                                            sx={{
                                                fontSize: "16px",
                                                // fontWeight: "bold",
                                                color: "darkblue",
                                            }}
                                        >
                                            <Link style={{ textDecoration: 'none', color: "black" }} to="/ourterms">Contact Us</Link>
                                        </Typography>
                                    </Grid> */}

                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item sm={3.5} >
                            <Button style={{  backgroundColor: "#0051f8"}} size="small" variant="contained">Join Our WaitList</Button>
                        </Grid>
                        {/* <Grid item sm={2} >
                            <Button size="small" >SignUp</Button>
                        </Grid> */}
                        {/* </Box> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
