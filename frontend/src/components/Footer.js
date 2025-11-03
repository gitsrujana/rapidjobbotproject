import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "white",
        padding: "30px 0",
        marginTop: "55px",
        borderTop: "1px solid #444",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        direction={isMobile ? "column" : "row"}
      >
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: "center",
              marginLeft: "5%",
              marginTop: "10%",
              display: "flex",

              gap: 3,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ color: "lightblue" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/findjobs"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ color: "lightblue" }}
            >
              Find Jobs
            </NavLink>
            <NavLink
              to="/services"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ color: "lightblue" }}
            >
              Services
            </NavLink>
            <NavLink
              to="/hirepeople"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ color: "lightblue" }}
            >
              Hire People
            </NavLink>
            <NavLink
              to="/Contactus"
              style={{ textDecoration: "none", color: "white" }}
              activeStyle={{ color: "lightblue" }}
            >
              Contact Us
            </NavLink>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} sx={{ justifyContent: "center" }}>
          <Typography variant="h6" gutterBottom>
            Follow us on
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: isMobile ? "center" : "center",
            }}
          >
            <Link href="#" color="inherit">
              <Twitter style={{ fontSize: 30 }} />
            </Link>
            <Link href="#" color="inherit">
              <LinkedIn style={{ fontSize: 30 }} />
            </Link>
            <Link href="#" color="inherit">
              <Instagram style={{ fontSize: 30 }} />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              textAlign: "center",

              marginTop: "10%",
            }}
          >
            <Typography variant="body2" color="inherit">
              © {new Date().getFullYear()} Job Portal. All rights reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
