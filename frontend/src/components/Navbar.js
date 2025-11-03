import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Container,
  Popover,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import { assets } from "../assets/assets";

const pages = ["Home", "FindJobs", "Services", "Contactus"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [openPopover, setOpenPopover] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handlePopoverClick = (event) => {
    setAnchorE2(event.currentTarget);
    setOpenPopover(true);
  };
  const handlePopoverClose = () => {
    setAnchorE2(null);
    setOpenPopover(false);
  };
  const handleClosePopover = () => {
    setAnchorE2(null);
    setOpenPopover(false);
  };
  const open = Boolean(anchorE2);
  const id = open ? "simple-popover" : undefined;

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "whitesmoke", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
    
          <IconButton
            edge="start"
            component={Link}
            to="/"
            sx={{
              p: 0,
              ml: isMobile ? 1 : 5,
              backgroundColor: "transparent",
              boxShadow: "none", 
            }}
            disableRipple 
          >
            <img
              src={logo}
              alt="JobPortal Logo"
              style={{
                height: isMobile ? 50 : 90,
                width: isMobile ? 120 : 300,
                boxShadow: "none", 
              }}
            />
          </IconButton>

      
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="black"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <NavLink
                      to={`/${page}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {page}
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                marginLeft: "8%",
              }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page}
                  to={`/${page}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      color: "#0D5263",
                      textTransform: "none",
                      fontWeight: "500px",
                      fontSize: "16px",
                      mx: 0.8,
                    }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>
          )}

          {/* Sign Up / Login */}
          <Box>
            {!isLoggedIn ? (
              <>
                <Button
                  onClick={handlePopoverClick}
                  sx={{
                    color: "black",
                    border: "1px solid black",
                    fontWeight: "bold",
                    borderRadius: 5,

                    textTransform: "none",
                    ml: isMobile ? 1 : -48,
                  }}
                >
                  SignUp
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorE2}
                  onClose={handleClosePopover}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  sx={{ marginTop:isMobile?'15%': "5%" }}
                >
                  <SignupPopover />
                </Popover>
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    color: "black",
                    textTransform: "none",

                    fontWeight: "bold",
                    ml: isMobile ? 1 : 2,
                  }}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <IconButton onClick={handleOpenUserMenu}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={
                        setting === "Logout"
                          ? handleLogout
                          : handleCloseUserMenu
                      }
                    >
                      {setting}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function SignupPopover() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Box
      sx={{
        textAlign: "center",

        padding: isMobile ? 2 : 4, 
        width: isMobile ? "60vw" : "40vw", //
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 3,
          fontWeight: "bold",
          fontSize: isMobile ? "1.5rem" : "2rem",
        }}
      >
        What do you want to do?
      </Typography>
      <Grid container spacing={isMobile ? 2 : 6} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <NavLink to="/jobseeker" style={{ textDecoration: "none" }}>
            <Card sx={{ borderRadius: 4, boxShadow: 4 ,  ":hover": { boxShadow: 6, transform: "scale(1.02)" },
                transition: "transform 0.2s ease-in-out",}}>
              <CardMedia
                component="img"
                image={assets.jobseeker}
                alt="Job Seeker"
                sx={{ height: isMobile ? 150 : 200, }}
              />
              <CardContent
                sx={{
                  backgroundColor: "#004d61",
                  color: "white",
                  textAlign: "center",
                  paddingY: isMobile ? 1.5 : 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold"    fontSize={isMobile ? "1rem" : "1.2rem"}>
                  I want a job
                </Typography>
              </CardContent>
            </Card>
          </NavLink>
        </Grid>
        <Grid item xs={12} sm={6}>
          <NavLink to="/hirepeople" style={{ textDecoration: "none" }}>
            <Card sx={{ borderRadius: 4, boxShadow: 4  , ":hover": { boxShadow: 6, transform: "scale(1.02)" },
                transition: "transform 0.2s ease-in-out",}}>
              <CardMedia
                component="img"
                image={assets.employer}
                alt="Employer"
                sx={{ height: isMobile ? 150 : 200,  }}
              />
              <CardContent
                sx={{
                  backgroundColor: "#004d61",
                  color: "white",
                  textAlign: "center",
                  paddingY: isMobile ? 1.5 : 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold" fontSize={isMobile ? "1rem" : "1.2rem"}>
                  I want to hire people
                </Typography>
              </CardContent>
            </Card>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Navbar;
