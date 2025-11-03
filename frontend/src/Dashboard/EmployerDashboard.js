import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
  IconButton,
  Link,
  AppBar,
} from "@mui/material";
import {
  People,
  Mail,
  Group,
  Work,
  CalendarToday,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import EmployerJobPost from "./EmployerJobPost";
import EmployerCompanyDetails from "./EmployerCompanyDetails";

const icons = [
  { label: "Active Jobs", icon: <People fontSize="large" />, route: "/active-jobs" },
  { label: "New Applications", icon: <Mail fontSize="large" />, route: "/new-applications" },
  { label: "Candidates to Review", icon: <Group fontSize="large" />, route: "/candidates-review" },
  { label: "Shortlisted for Interviews", icon: <Work fontSize="large" />, route: "/shortlisted" },
  { label: "Today's Interviews", icon: <CalendarToday fontSize="large" />, route: "/interviews" },
];

const EmployerDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <>
  

 
      <Box
        sx={{
        
          display: "flex",
        position:"absolute",
          top:"13%",
          left:'0%',
          right:"0%",
          width:"97%",
          height:"30%",
          color: "white",
          padding: 3,
          margin:0,
          borderRadius: 1,
          mb: 1,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: "linear-gradient(135deg, #003366 65%, #f0f0f0 35%)",
            zIndex: -1,
           
          },
        }}
      >
        <Box sx={{ width: "100%",margin:0,padding:0 }}>
          <Typography variant="h4" align="left" gutterBottom>
            Post Your Job in Minutes!
          </Typography>
          <Typography variant="body1" align="left">
            Instant visibility to top talent across industries
            <br />
            Unlimited direct calls from qualified applicants
            <br />
            Access to 35 million+ candidates for your ideal hire
          </Typography>
          <Box textAlign="center" mt={2}>
            <Button variant="contained" sx={{ color: "#003366", backgroundColor: "#fff" ,textTransform:"none"}}>
              Post Job
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "35%",
            color: "#003366",
            padding: 2,
            borderRadius: 1,
            ml: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
            RapidJobsBot
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "1.2rem", fontWeight: "500" }}>
            "RapidJobsBot-The Ultimate Hiring Hub,Anytime,Anywhere"
          </Typography>
        </Box>
      </Box>
    
       <Box sx={{
          width:"100%",
          overflow:'hidden',
          margin:0,
          margin:0
         
          
       }}>

      

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            height: "150px",
            mt: 50,
            mb: 4,
           
          }}
        >
          <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{mt:"50px"}}>
            {icons.map((item, index) => (
              <Grid item key={index}>
                <motion.div
                  animate={{
                    x: activeIndex === index ? 0 : (index - activeIndex) * 120,
                    scale: activeIndex === index ? 1.2 : 1,
                    opacity: activeIndex === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                  onAnimationComplete={() => {
                    if (index === icons.length - 1) {
                      setTimeout(() => setActiveIndex((prev) => (prev + 1) % icons.length), 2000);
                    }
                  }}
                >
                  <IconButton
                    color="primary"
                    disableRipple
                    onClick={() => handleClick(item.route)}
                    sx={{
                      border: activeIndex === index ? "2px solid #003366" : "none",
                      boxShadow: activeIndex === index ? "0 4px 8px rgba(0,0,0,0.2)" : "none",
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </motion.div>
                {activeIndex === index && (
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ mt: 1, fontWeight: "bold" }}
                  >
                    {item.label}
                  </Typography>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={3} >
          <Grid item xs={12} md={6}>
            <Card sx={{border:"5px solid white",boxShadow:"20px",backgroundColor:"whitesmoke",width:'100%',maxWidth:'700px',marginLeft:"5%"}}>
              <CardContent>
                <Typography variant="h6">Overview of Active Jobs</Typography>
                <Box mt={2} textAlign="center">
                  <Typography variant="body2" color="textSecondary">
                    You don’t have any active jobs right now.
                    <br />
                    You will see a graph here when you do.
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 14,textTransform:"none"  }}>
                    Post Job
                  </Button>
                  <Link href="#" sx={{ mt: 1,ml:-10 }}>
                    View previously posted jobs
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card sx={{border:"5px solid white",boxShadow:"20px",backgroundColor:"whitesmoke",width:"700px",height:"280px"}} >
              <CardContent>
                <Typography variant="h6">Upcoming Interviews</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                  0 interviews scheduled
                </Typography>
                <Link href="#" color="primary" sx={{ display: "block", mt: 1 }}>
                  See Demo
                </Link>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2">Start Interviewing Today</Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 14,textTransform:"none" }}>
                  Select Job
                </Button>
                <Button variant="outlined" color="primary" sx={{ mt: 1 ,textTransform:"none",marginLeft:'-50px'}}>
                  Select Calendar
                </Button>
                <Box mt={1} textAlign="center">
                  <Button variant="contained" color="primary" sx={{textTransform:"none"}}>
                    View Candidates
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h6" fontWeight='bold'>Recent Jobs</Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2} direction={"column "} sx={{width:"80%",margin:'0 auto'}}>
            {[ 
              {
                title: 'Technical Architect - Identity & Access Management',
                location: 'Anywhere in India/Multiple Location',
                experience: '8-17 yrs',
                applications: '5 Applications',
                new: '0 New',
                date: '14 Jul 2023',
              },
              {
                title: 'Java Full Stack Developer - Object Oriented Programming Languages',
                location: 'Anywhere in India/Multiple Locations Hyderabad',
                experience: '6-12 yrs',
                applications: '16 Applications',
                new: '0 New',
                date: '1 Jun 2023',
              },
            ].map((job, index) => (
              <Grid item xs={12} md={5} key={index}>
                <Card variant="outlined" sx={{border:"5px solid white",boxShadow:"20px",backgroundColor:"whitesmoke"}}>
                  <CardContent>
                    <Typography variant="subtitle1">{job.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {job.location}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {job.experience}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Published: {job.date}
                    </Typography>
                    <Typography variant="body2">
                      <Link href="#">View Recommended Candidates</Link>
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>{job.applications}</strong> | <strong>{job.new}</strong> New
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={4}>
          <Typography variant="h6">Candidates Who Have Followed Up</Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={2}>
          </Grid>
        </Box>


        </Box>

    

      <EmployerJobPost/>
    <EmployerCompanyDetails/>
    </>
  );
};

export default EmployerDashboard;