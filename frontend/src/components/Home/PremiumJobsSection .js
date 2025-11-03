import React from "react";
import { Box, Typography, Button, Grid, List, ListItem, ListItemText, IconButton, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const PremiumJobsSection = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#0E5263',
          color: 'white',
       
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          marginBottom: '16px',
          height: '200px',
          mt:10 
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item md={8} xs={12}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Premium <span style={{ color: "#ffffff" }}>Handpicked</span> Jobs for you
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>
              Premium Handpicked Jobs that you will not find anywhere else
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f5f5f5",
                color: "#000",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
              }}
            >
              Register Now!
            </Button>
          </Grid>
        </Grid>
      </Box>





      <Box sx={{ padding: "30px 20px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px",textAlign:"start" }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <IconButton href="#" sx={{ backgroundColor: "#0A66C2", color: "#fff" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="#" sx={{ backgroundColor: "#3b5998", color: "#fff" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" sx={{ backgroundColor: "#E1306C", color: "#fff" }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px",textAlign:"start" }}>
              Jobs by Location
            </Typography>
            <List dense>
              {[
                "Jobs in Bangalore",
                "Jobs in Delhi/NCR",
                "Jobs in Noida",
                "Jobs in Gurgaon",
                "Jobs in Mumbai",
                "Jobs in Pune",
                "Jobs in Hyderabad",
              ].map((location, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText primary={`• ${location}`} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px",textAlign:"start" }}>
              Jobs by Domain
            </Typography>
            <List dense>
              {[
                "Jobs from Product Companies",
                "Jobs from E-commerce Companies",
                "Jobs from Fin-tech Companies",
              ].map((domain, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText primary={`• ${domain}`} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px",textAlign:"start" }}>
              Jobs by Categories
            </Typography>
            <List dense>
              {[
                "Jobs in Backend Development",
                "Jobs in Frontend Development",
                "Jobs in Analytics & Data Science",
                "Jobs in Mobile Application",
                "Jobs in DevOps jobs in Emerging tech",
              ].map((category, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText primary={`• ${category}`} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PremiumJobsSection;
