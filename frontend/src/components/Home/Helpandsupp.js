import React from 'react';
import { Box, Typography, CircularProgress, Grid } from '@mui/material';
import { assets } from '../../assets/assets';

const Helpandsupp = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        marginTop: '8%'
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <img
            src= {assets.helpandsupport}
            alt="Robot Support"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Help and Support
          </Typography>
          <Typography variant="body1" gutterBottom>
            Common questions about the platform and its features. Live Chat: Option to chat with
            customer support agents.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Guides & Tutorials: Step-by-step instructions on how to apply for jobs, post job
            listings, or manage resumes.
          </Typography>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Contact us for more details on{' '}
            <a href="tel:+918712349669">8712349669</a> or{' '}
            <a href="mailto:info@rapidjobsbot.com">info@rapidjobsbot.com</a>
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <CircularProgress size={24} />
        <Typography
          variant="h6"
          sx={{
            marginLeft: '10px',
            fontWeight: 'bold',
          }}
        >
          THIS PAGE IS LOADING...
        </Typography>
      </Box>
    </Box>
  );
};

export default Helpandsupp;
