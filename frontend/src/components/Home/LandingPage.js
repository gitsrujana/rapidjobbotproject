import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

import { assets } from '../../assets/assets';

const LandingPage = () => {
  return (
    <Grid
      container
      sx={{
        height: '100vh',
        maxWidth: '100%',
        margin: '0 auto',
        backgroundColor: '#f0f0f0',
        padding: { xs: '20px', md: '40px' },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: { xs: 'left', md: 'center' },
          padding: { xs: '10px', md: '20px' },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#FF5733',
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: { xs: '16px', md: '20px' },
          }}
        >
          "Your Dream Job Awaits—Join 24k+ Talented Individuals Already on the
          Path to Success!"
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            fontSize: { xs: '24px', md: '36px' },
          }}
        >
          Connecting Talent to Opportunity!!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '20px',
            lineHeight: 1.7,
            fontWeight: 'bold',
            fontSize: { xs: '14px', md: '16px' },
          }}
        >
          RapidJobsBot is where careers take flight! With thousands of job
          seekers finding meaningful work through our platform, we’re here to
          bridge the gap between talent and opportunity. Whether you're looking
          to hire top candidates or land your dream job, our platform offers
          seamless, efficient solutions for everyone. Explore tailored job
          alerts, insightful career resources, and a network of top employers
          ready to hire.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            fontSize: { xs: '14px', md: '18px' },
          }}
        >
          Don’t miss out—start your journey with us today! Post a job or find
          your next career move!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FF5733',
            padding: { xs: '10px 20px', md: '20px 40px' },
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: 'bold',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          Post A Job
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: '10px', md: '20px' },
        }}
      >
        <Box
          component="img"
          src={assets.landingimage}
          alt="AI and Human Collaboration"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default LandingPage;