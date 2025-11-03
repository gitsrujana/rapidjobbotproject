import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Box, Typography,Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ProfessionalSkills= ({ handleNext, handleBack }) => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    profession: '',
    jobRole: '',
    experienceYears: '',
    experienceMonths: '',
    skills: '',
    certifications: '',
    objective: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/v1/api/professional-skills/register', formData);
      alert(response.data.message);
      handleNext();
    } catch (error) {
      console.error('Error registering:', error);
      alert('Registration failed');
    }
  };
 

  return (
    <Container maxWidth="md">
    <Box
      sx={{
        p: 3,
        borderRadius: '8px',
      
        margin: 'auto',
        my: 1,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",

        backgroundColor: '#ffff'
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              Professional Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Profession Name</Typography>
            <TextField
         
              name="profession"
              fullWidth
              required
              value={formData.profession}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '5px',
                  backgroundColor:"whitesmoke"
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
          <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Current Job</Typography>
            <TextField
         
              name="jobRole"
              fullWidth
              required
              value={formData.jobRole}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                 borderRadius: '5px',
                  backgroundColor:"whitesmoke"
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
          <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Experience(Years)</Typography>
            <TextField
              select
         
              name="experienceYears"
              fullWidth
              required
              value={formData.experienceYears}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                 borderRadius: '5px',
                  backgroundColor:"whitesmoke"
                },
              }}
            >
              {[...Array(31).keys()].map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
          <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Experience(Months)</Typography>
            <TextField
              select
           
              name="experienceMonths"
              fullWidth
              required
              value={formData.experienceMonths}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '5px',
                  backgroundColor:"whitesmoke"
                },
              }}
            >
              {[...Array(12).keys()].map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
          <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Skills</Typography>
            <TextField
      
              name="skills"
              fullWidth
              required
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              placeholder="Comma-separated skills (e.g., IT, Marketing)"
              sx={{
                '& .MuiOutlinedInput-root': {
                 borderRadius: '5px',
                  backgroundColor:"whitesmoke"
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
          <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Professional Licenses/Certifications</Typography>
            <TextField
         
              name="certifications"
              fullWidth
              value={formData.certifications}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '5px',
                  backgroundColor:"whitesmoke"
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
          <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Career Objective</Typography>
            <TextField
            
              name="objective"
              fullWidth
              multiline
              rows={3}
              value={formData.objective}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                   borderRadius: '5px',
                  backgroundColor:"whitesmoke"
                },
              }}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="center" spacing={2}>
          <Button  sx={{ borderRadius: "16px",textTransform:"none",margin:"5%" }} onClick={handleBack}  color="secondary">
       <ArrowBackIosIcon/>
        </Button>
        <Button
                    onClick={handleNext}
                    color="primary"
                    sx={{
                      borderRadius: "16px",
                      textTransform: "none",
                      margin: "5%",
                      marginLeft: "45%",
                    }}
                  >
                    skip
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
    </Container>
  );
};

export default ProfessionalSkills;