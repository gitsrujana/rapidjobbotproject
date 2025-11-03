import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Box, Grid, useMediaQuery, Button } from "@mui/material";
import axios from "axios";
import { assets } from "../../assets/assets";


const SavedJobs = () => {
  const [jobposts, setJobposts] = useState([]);
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/v1/api/jobpost/");
        setJobposts(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        alert("Failed to fetch jobs. Please try again later.");
      }
    };
    fetchJobs();
  }, []);
 
  const handleShowCompanyDetails = () => {
    setShowCompanyDetails(true); 
  };
  return (

    <>

<Box
      sx={{
        width: "100vw", 
        minHeight: "120vh",
      
        padding: 0, 
        margin: 0,
        overflowX: "hidden",
        mt:13
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundPosition: 'center',
           
          height: '300px',
          color: 'white',
          borderRadius: '8px',
          p: 4,
          mb: 5,
          backgroundColor: '#0E5263',
          flexWrap:"wrap",
          
        }}
      >
       <img
          src={assets.savedjobs}
          alt="Job Categories"
          style={{
            width: '250px',
            height:"250px",
            borderRadius: '8px',
            
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
        />
       <Box
          sx={{
        
            flex:1,
            textAlign: "center",
            mt: { xs: 3, md: 0 },
          }}
        >
          <Typography variant="h4" component="h1" paddingBottom={3} marginTop={{ xs: -5, md: -10 }} 
 >Saved Jobs</Typography>
          <Typography variant="body1" sx={{maxWidth:'600px',whiteSpace:'pre-line',textAlign:'center',lineHeight:'1.5',margin:'0 auto'}} >
            Save jobs that interest you and return to them at any moment. Whether you're in the middle of a search or looking to compare choices,our "Saved Jobs" tool keeps you organized and focused.
            Keep track of promising possibilities without fear of losing them.
          </Typography>
        </Box>
      </Box>

</Box>


    <Box sx={{ mt: -50, mx: isMobile ? "2%" : "10%" }}>
    <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold', color: '#1D3557' }}>
      Saved Job Posts
    </Typography>
    <Grid container spacing={4} >
      {jobposts.map((job) => (
        <Grid item xs={12} sm={6} md={4} key={job.id}>
          <Card
            sx={{
              backgroundColor: '#fff',
              boxShadow: 5,
              borderRadius: 3,
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: 12,
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
            <CardContent sx={{ paddingBottom: 2 }}>
           
              <Typography variant="h6" fontWeight="bold" sx={{ color: '#264653', fontSize: '1.2rem' }}>
                {job.jobTitle}
              </Typography>
              
        
              <Typography variant="body2" sx={{ mt: 1, color: '#e63946', fontWeight: 'bold' }}>
                <strong>Location:</strong> {job.jobLocation}
              </Typography>
              
        
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 1 }}>
                <Box sx={{ backgroundColor: '#f1faee', borderRadius: 2, padding: '8px 12px', boxShadow: 2 }}>
                  <Typography variant="body2" sx={{ color: '#264653' }}>
                    <strong>Openings:</strong> {job.openings}
                  </Typography>
                </Box>
                <Box sx={{ backgroundColor: '#0e5263', borderRadius: 2, padding: '8px 12px', boxShadow: 2 }}>
                  <Typography variant="body2" sx={{ color: '#fff' }}>
                    <strong>Experience:</strong> {job.experienceLevel || "Not specified"}
                  </Typography>
                </Box>
              </Box>

              
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Box sx={{ backgroundColor: '#2a9d8f', borderRadius: 2, padding: '8px 12px', boxShadow: 2 }}>
                  <Typography variant="body2" sx={{ color: '#ffffff' }}>
                    <strong>Salary:</strong> {job.minSalary || "N/A"} - {job.maxSalary || "N/A"}
                  </Typography>
                </Box>
                <Box sx={{ backgroundColor: '#f4a261', borderRadius: 2, padding: '8px 12px', boxShadow: 2 }}>
                  <Typography variant="body2" sx={{ color: '#ffffff' }}>
                    <strong>Bonus:</strong> {job.bonus || "N/A"}
                  </Typography>
                </Box>
              </Box>

          
              <Typography variant="body2" sx={{ mt: 2, color: '#555', fontStyle: 'italic',textAlign:"justify" }}>
                {job.jobDescription}
              </Typography>
            </CardContent>


            <Button
      sx={{
       
        textTransform:"none", 
        color: 'black', 
        padding: '8px 16px', 
        borderRadius: '4px', 
        fontWeight: '500', 
        boxShadow: 'none', 
        transition: 'background-color 0.3s', 
        '&:hover': {
          backgroundColor: '#0E5263',
          color:"white"
        },
      
      }}
      onClick={handleShowCompanyDetails}
    >
      About Company
    </Button>

    {/* {showCompanyDetails && <PopularJobCategory />} */}

    
          </Card>
          
        </Grid>
      ))}
      
    </Grid>
     
 
  </Box>
 
    </>
  

  
  );
};

export default SavedJobs;
