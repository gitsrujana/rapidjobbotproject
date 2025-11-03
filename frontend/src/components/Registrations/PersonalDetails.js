import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Personaldetails = ({  handleBack }) => {
  const navigate=useNavigate();
  const mediaViewPort = useMediaQuery("(min-width:600px)");
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    gender: "",
    nationality: "",
    languagePreference: "",
    healthCondition: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/personal-details/register",
        formData
      );
      alert(response.data.message);
      navigate('/HomePage')
    } catch (error) {
      console.error("Error registering personal details:", error);
      alert("Registration failed");
    }
  };
  const handleFinish = () => {
    navigate("/HomePage"); 
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", width: "100vw",marginTop:mediaViewPort?"3%":"-5%"}}
    >
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box
          sx={{
            p: 3,
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography variant="h6" align="center" gutterBottom>
              Personal Details
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Date of Birth</Typography>
                <TextField
                  fullWidth
                 sx={{backgroundColor:"whitesmoke"}}
                  name="dateOfBirth"
                  placeholder="DD-MM-YYYY"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
              <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Gender</Typography>
                <FormControl fullWidth variant="outlined" sx={{backgroundColor:"whitesmoke"}}>
                 
                  <Select
                    value={formData.gender}
                    name="gender"
                    onChange={handleChange}
                    label="Gender"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
              <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Nationality</Typography>
                <FormControl fullWidth variant="outlined" sx={{backgroundColor:"whitesmoke"}}>
                
                  <Select
                    value={formData.nationality}
                    name="nationality"
                    onChange={handleChange}
                    label="Nationality"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="American">American</MenuItem>
                    <MenuItem value="Canadian">Canadian</MenuItem>
                    <MenuItem value="Indian">Indian</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
              <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Language Preference</Typography>
                <FormControl fullWidth variant="outlined" sx={{backgroundColor:"whitesmoke"}}>
               
                  <Select
                    value={formData.languagePreference}
                    name="languagePreference"
                    onChange={handleChange}
                    label="Language Preference"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Spanish">Spanish</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
              <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Disability/Health Condition</Typography>
                <TextField
                sx={{backgroundColor:"whitesmoke"}}
                  fullWidth
               name="healthCondition"
                  placeholder="Any specific health condition?"
                  value={formData.healthCondition}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} container justifyContent="center" spacing={2}>
          <Button  sx={{ borderRadius: "16px",textTransform:"none",margin:"5%" }} onClick={handleBack}  color="secondary">
          <ArrowBackIosIcon/>
        </Button>
        <Button
                    
                    color="primary"
                    sx={{
                      borderRadius: "16px",
                      textTransform: "none",
                      margin: "5%",
                      marginLeft: "45%",
                    }}
                    onClick={handleFinish}
                  >
                    finish
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    sx={{
                      border:"1px solid black",
                      borderRadius: "16px",
                 margin:"5%",
              marginLeft:"-5%",
                      textTransform: "none",
                      '&:hover': {
                        backgroundColor: '#0E5263',
                        color:"white"
                      },
                    }}
                  >
                    Next
                  </Button>
         
            
            </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Personaldetails;
