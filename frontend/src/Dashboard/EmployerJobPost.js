import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";

const EmployerJobPost = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobLocation: "",
    openings: "",
    experienceLevel: "",
    minSalary: "",
    maxSalary: "",
    bonus: "No",
    jobDescription: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.jobTitle) formErrors.jobTitle = "Job Title is required";
    if (!formData.jobLocation)
      formErrors.jobLocation = "Job Location is required";
    if (!formData.openings)
      formErrors.openings = "Number of Openings is required";
    if (!formData.jobDescription)
      formErrors.jobDescription = "Job Description is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    if (!validateForm()) {
      return;
    }


    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/jobpost/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Job posted successfully:", response.data);
      alert("Job posted successfully!");
    } catch (error) {
      if (error.response) {
    
        console.error("Error response:", error.response.data);
        alert(`Error: ${error.response.data.message || "Failed to post the job."}`);
      } else if (error.request) {
  
        console.error("Error request:", error.request);
        alert("No response from the server. Please try again later.");
      } else {
   
        console.error("Error message:", error.message);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
   <>
   <Box 
   sx={{
    border:"2px solid whitesmoke",
    boxShadow:"35px",
    marginTop:"5%",
    width:isMobile?'100%':"60%",
    marginLeft:"18%",
    marginRight:"2%",
    padding:"2%"

   }}
   >

      <Typography variant="h6" gutterBottom sx={{ mt: 1,fontWeight:"bold" }}>
        Basic Job Details
      </Typography>
     
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
            JobTitle
                </Typography>
              <TextField
             
               
                name="jobTitle"
                variant="outlined"
                fullWidth
                required
                placeholder="Enter the job title"
                value={formData.jobTitle}
                onChange={handleChange}
                error={!!errors.jobTitle}
                helperText={errors.jobTitle}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
            Job location
                </Typography>
              <FormControl fullWidth error={!!errors.jobLocation}>
              
                <Select
                
                  name="jobLocation"
                  placeholder="select job location"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Pune">Pune</MenuItem>
                </Select>
                {errors.jobLocation && (
                  <Typography variant="body2" color="error">
                    {errors.jobLocation}
                  </Typography>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
                No of Openings
                </Typography>
              <TextField
         
                name="openings"
                variant="outlined"
                fullWidth
                required
                placeholder="e.g. 2"
                value={formData.openings}
                onChange={handleChange}
                error={!!errors.openings}
                helperText={errors.openings}
              />
            </Grid>
          </Grid>
        </CardContent>
    

      <Typography variant="h6" fontWeight='bold' gutterBottom sx={{textAlign:"start",marginLeft:"2%"}} >
        Candidate Requirement
      </Typography>
  
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{textAlign:"start"}}>
                Total Experience of Candidate
              </Typography>
              <Box display="flex" gap={2} mt={1}>
                <Button
                sx={{textTransform:"none",color:"black"}}
                  variant={
                    formData.experienceLevel === "Any" ? "contained" : "outlined"
                  }
                  onClick={() =>
                    setFormData({ ...formData, experienceLevel: "Any" })
                  }
                  
                >
                  Any
                </Button>
                <Button
                sx={{textTransform:"none",color:"black"}}
                  variant={
                    formData.experienceLevel === "Freshers Only"
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      experienceLevel: "Freshers Only",
                    })
                  }
                >
                  Freshers Only
                </Button>
                <Button
                 sx={{textTransform:"none",color:"black"}}
                  variant={
                    formData.experienceLevel === "Experienced only"
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() =>
                    setFormData({
                      ...formData,
                      experienceLevel: "Experienced only",
                    })
                  }
                >
                  Experienced only
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
           Minimum Salary
                </Typography>
              <TextField
            
               
                name="minSalary"
                variant="outlined"
                fullWidth
                placeholder="e.g. 10000"
                value={formData.minSalary}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
          Maximum Salary
                </Typography>
              <TextField
           
              
                name="maxSalary"
                variant="outlined"
                fullWidth
                placeholder="e.g. 15000"
                value={formData.maxSalary}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2" textAlign='start'>
                Do you offer a bonus in addition to monthly salary?
              </Typography>
              <RadioGroup
                row
                name="bonus"
                value={formData.bonus}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <TextField
         
                label="Job Info / Job Description"
                name="jobDescription"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                placeholder="Enter the job description"
                value={formData.jobDescription}
                onChange={handleChange}
                error={!!errors.jobDescription}
                helperText={errors.jobDescription}
              />
            </Grid>
          </Grid>
        </CardContent>
     

      <Box textAlign="center" mt={2}>
        <Typography variant="body2" color="primary">
          Need Help? Call Us at 8712349669
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2,textTransform:"none" }}
          onClick={handleSubmit}
        >
          Submit Job
        </Button>
      </Box>
      </Box>
    </>
  );
};

export default EmployerJobPost;
