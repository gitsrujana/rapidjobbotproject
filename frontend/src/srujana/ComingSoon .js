import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
const ComingSoon = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Box
        component="img"
        src={assets.comingsoon} 
        alt="Robot Illustration"
        sx={{
          width: '100%',
          maxWidth: '600px',
          marginBottom: '30px',
        }}
      />

      <Container maxWidth="md" sx={{marginTop:"5%"}}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: '16px',
          }}
        >
          This page is coming soon!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: '8px',
          }}
        >
          We’re working hard to bring you an amazing experience on this page. Our team is
          fine-tuning every detail to ensure it meets your needs and exceeds your expectations.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontStyle: 'italic',
            marginBottom: '16px',
          }}
        >
          "Stay tuned! We’ll have this page ready for you in no time."
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '16px' }}>
          If you have any questions or need assistance in the meantime, feel free to{' '}
         <NavLink to={'/ContactUs'}>
          <Button
            variant="text"
            sx={{ fontWeight: 'bold', textTransform: 'none', padding: '0' }}
            onClick={() => alert('Contact Us clicked!')}

          >
            Contact Us
          </Button>
          </NavLink>
          . We’re here to help!
        </Typography>
      </Container>
    </Box>
  );
};

export default ComingSoon;
