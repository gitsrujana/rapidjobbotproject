import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  CardMedia,
} from '@mui/material';
import axios from 'axios';
import { Category } from '@mui/icons-material';

function DisplayEmployerDetails() {
  const [expandedSections, setExpandedSections] = useState({});
  const [employerData, setEmployerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployerDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/v1/api/companydetails/getdata');
        setEmployerData(response.data); 
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again.');
        setLoading(false);
      }
    };

    fetchEmployerDetails();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  const handleExpand = (category) => {
    setExpandedSections((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };
  return (
    <Box sx={{ padding: 4, backgroundColor: "#fff", minHeight: "100vh" ,marginTop:"5%"}}>
    <Typography
      variant="h5"
      textAlign="center"
      marginBottom={4}
      fontWeight="bold"
      sx={{ color: "black" }}
    >
      Employer Company Details
    </Typography>
    <Grid container spacing={3}>
      {employerData.map((employer) => (
        <Grid item xs={12} sm={6} md={3} key={employer._id}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "12px",
              backgroundColor: "#ffffff",
              overflow: "hidden",
              
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              },
              overflow: 'hidden',
              position: 'relative',
              padding: 2,
            }}
          >
              
              <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '8px',
                background: 'linear-gradient(to right, #2a9d8f, #264653)',
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                borderBottom: "1px solid #ddd",
                
              }}
            >
              {employer.logo ? (
                <CardMedia
                  component="img"
                  src={
                    employer.logo.startsWith("http")
                      ? employer.logo
                      : `http://localhost:5000/uploads/${employer.logo}`
                  }
                  alt={`${employer.companyName} Logo`}
                  sx={{
                    height: 60,
                    width: 60,
                    objectFit: "contain",
                    borderRadius: "60%",
                    border: "1px solid #ddd",
                    marginRight: 2,
                    backgroundColor:"#fff"
                  }}
                />
              ) : (
                <Box
                  sx={{
                    height: 60,
                    width: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                    marginRight: 2,
                  }}
                >
                  <Typography variant="body2" color="black">
                    Logo
                  </Typography>
                </Box>
              )}
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ flexGrow: 1, textAlign: "left" }}
              >
                {employer.companyName}
              </Typography>
            </Box>
  
            <CardContent sx={{ padding: 2 }}>
              <Typography
                variant="body2"
                color='black'
            
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography sx={{ fontWeight:'bold'}}>Contact:</Typography>{" "}
                <Typography style={{ marginLeft: 8 }}>{employer.contactPersonName}</Typography>
              </Typography>
              <Typography
               color="black"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography sx={{ fontWeight:'bold'}}>Phone:</Typography>{" "}
                <Typography >{employer.phoneNumber}</Typography>
              </Typography>
              <Typography
                variant="body2"
                color="black"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography sx={{ fontWeight:'bold'}}>Email:</Typography>{" "}
                <Typography >{employer.email}</Typography>
              </Typography>
              <Typography
                variant="body2"
                  color="black"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography sx={{ fontWeight:'bold'}}>Timings:</Typography>{" "}
                <Typography style={{ marginLeft: 8 }}>
                  {employer.jobTimings || "Not specified"}
                </Typography>
              </Typography>
              <Typography
                
                color="black"
                sx={{ display: "flex", alignItems: "center" ,fontSize:"10px"}}
              >
                <Typography sx={{ fontWeight:'bold'}}>Address:</Typography>{" "}
                <Typography  sx={{fontSize:"13px"}}>{employer.jobAddress}</Typography>
              </Typography>
              <Typography
                variant="body2"
                color="black"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography sx={{ fontWeight:'bold'}}>Hiring:</Typography>{" "}
                <Typography style={{ marginLeft: 8 }}>{employer.hiringFrequency}</Typography>
                </Typography>
                <Typography
                variant="body2"
                color="black"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography sx={{ fontWeight:'bold'}}>companysize:</Typography>{" "}
                <Typography style={{ }}>{employer.sizeOfOrganization}</Typography>
              </Typography>
             
            </CardContent>
          <Button sx={{textTransform:"none"}}
           onClick={() => handleExpand(Category)}
          >know more</Button>
          
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
  

  
  );
}

export default DisplayEmployerDetails;
