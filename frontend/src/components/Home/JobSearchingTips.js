import React from 'react';
import { Box, Typography, Grid, Button, AppBar, Toolbar } from '@mui/material';
import { assets } from '../../assets/assets';

const JobSearchingTips = () => {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh', marginTop:'6%' }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            RAPIDJOBSBOT
          </Typography>
          <Box>
            <Button sx={{ marginRight: 2 }}>Home</Button>
            <Button sx={{ marginRight: 2 }}>Find Jobs</Button>
            <Button sx={{ marginRight: 2 }}>Services</Button>
            <Button sx={{ marginRight: 2 }}>Contact Us</Button>
            <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: 'white', marginRight: 1 }}>
              Sign up
            </Button>
            <Button variant="outlined" sx={{ borderColor: '#1976d2', color: '#1976d2' }}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box textAlign="center" mt={5}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Job Searching Tips
        </Typography>
      </Box>

      <Grid container justifyContent="center" spacing={3} mt={5}>
        <Grid item xs={12} md={8}>
          <Box textAlign="center" mb={5}>
            <img
              src={assets.jobsearchingtips}
              alt="Job Searching Tips"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Box>

          <Typography variant="h6" fontWeight="bold" mb={2}>
            Tips
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Research the company:</strong> Look up recent news, company culture, and role specifics.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Interview Prep Tips:</strong> Step-by-step preparation guides. Practice scenarios and common
            interview questions.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Popular Job Categories:</strong> We help you explore trending job categories and industries, keeping
            you informed on high-demand areas suited to your background. Demonstrates genuine interest and prepares for
            relevant questions.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Know Your Resume:</strong> Be ready to discuss experiences confidently. Highlight achievements,
            projects, and skills relevant to the role.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Prepare Key Stories:</strong> Use the STAR method (Situation, Task, Action, Result) for structured
            responses. Ideal for showing problem-solving, teamwork, and leadership.
          </Typography>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={5} pb={5}>
        <Typography variant="h6" fontWeight="bold">
          THIS PAGE IS LOADING.....
        </Typography>
      </Box>
    </Box>
  );
};

export default JobSearchingTips;
