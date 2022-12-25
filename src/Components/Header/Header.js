import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../Asserts/logFixNow.jpeg"
import { Grid } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const drawerWidth = 240;
// const navItems = ["Home", "Partner", "About Us", "Contact Us"];

const navItems = [
    { name: "Home", url: "/Home" },
    { name: "Partner", url: "/Partner" },
    { name: "About Us", url: "/AboutUs" },
    { name: "Contact Us", url: "/ContactUs" },
];


function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img width={150} src={logo} alt=""></img>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <NavLink
                            to={item.url}
                            style={({ isActive }) => ({
                                textDecoration: isActive ? 'solid underline #0052ff 4px ' : 'none',
                            })}
                        >
                            <ListItemButton sx={{ textAlign: "center" }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" color="default"  >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2, display: { sm: "none" },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid
                        sx={{
                            mr: 0,
                            display: { xs: "none", sm: "block" },
                        }}
                    // sx={{ }
                    >
                        {/* <Typography variant="h6" noWrap component="a" href="/"> */}

                        <img width={200} src={logo} alt=""></img>
                        {/* </Typography> */}
                    </Grid>

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
                                            color: "black",
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
                        <Button style={{ backgroundColor: "#0051f8" }} size="small" variant="contained">Join Our WaitList</Button>
                    </Grid>
                    {/* <Grid item sm={2} >
                            <Button size="small" >SignUp</Button>
                        </Grid> */}
                    {/* </Box> */}
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" >
                <Toolbar />
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};

export default DrawerAppBar;
