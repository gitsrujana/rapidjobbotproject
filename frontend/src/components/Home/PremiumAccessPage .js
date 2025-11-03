import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Snackbar,
  Alert,
  FormControlLabel,
  Switch,
  Container,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const PremiumAccessPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null); // Track selected plan
  const [isAnnual, setIsAnnual] = useState(true); // Toggle between monthly and annual
  const [successMessage, setSuccessMessage] = useState(''); // Success message
  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar visibility
  const [errorMessage, setErrorMessage] = useState(''); // Error message
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // Snackbar severity (success/error)
 const navigate=useNavigate();
  const handleSelectPlan = async (plan) => {
    setSelectedPlan(plan.name);
        navigate('/SubscriptionPage')
    const subscriptionData = {
      planName: plan.name,
      billingType: isAnnual ? 'Annual' : 'Monthly',
      price: isAnnual ? plan.annualPrice : plan.price,
    };

    try {
      const response = await axios.post(
        'https://your-api-endpoint.com/subscribe',
        subscriptionData
      );
      if (response.status === 200) {
        setSuccessMessage(
         ` You have successfully subscribed to the ${plan.name} plan (${subscriptionData.billingType})!`
        );
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          'An error occurred while processing your subscription.'
      );
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleToggle = () => {
    setIsAnnual((prev) => !prev);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const plans = [
    {
      name: 'Free',
      price: 0,
      annualPrice: 0,
      features: [
        'Limited job matches',
        'Resume upload',
        'Access to job recommendations',
        'Job search',
        'Sign Up Free',
      ],
    },
    {
      name: 'Basic',
      price: 5,
      annualPrice: 50,
      features: [
        'Priority job alerts',
        'Saved job tracking',
        'Access to job recommendations',
        'Notification for top jobs in your field',
        'Upgrade to Basic',
      ],
    },
    {
      name: 'Plus',
      price: 15,
      annualPrice: 150,
      isPopular: true,
      features: [
        'Personalized career advice',
        'Interview preparation',
        'Advanced skill-based matching',
        'Profile performance insights',
        'Upgrade to Plus',
      ],
    },
    {
      name: 'Pro',
      price: 30,
      annualPrice: 300,
      features: [
        'Exclusive job listings',
        'Direct messaging with recruiters',
        'Advanced job analytics',
        'Tailored recommendations for your skills',
        'Upgrade to Pro',
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 10, padding: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={8} alignItems="center">
    
          <Grid item xs={12} md={6}>
            <Box sx={{marginLeft:"-150px",alignItems:"center"}}>
              <Typography variant="h4" fontWeight="bold" sx={{ color: '#333', mb: 2,marginLeft:'300px' }}>
                Premium Access
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 600, margin: 'auto', color: '#555',marginLeft:'300px' }}>
                Upgrade to Premium for exclusive benefits geared to help you with your job search. Enjoy perks like
                direct chat with the team, access to in-demand job postings, and advanced matching insights. Stand out
                and connect directly with top employers.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Box sx={{backgroundColor:"#0E5263",width:"200px",height:'250px'}}>

            <img
              src={assets.access}
              alt="Premium Access"
              style={{ maxWidth: '200px', borderRadius: '15px' ,padding:2,marginTop:"40px",marginLeft:"-110px"}}
            />
            </Box>
          </Grid>
          
        </Grid>
      </Box>
      <Typography variant="h5" align="center" gutterBottom>
        Subscription Plans for RapidJobsBot
      </Typography>
      <Typography variant="body2" align="center" sx={{ mb: 4,fontSize:'10px' }}>
        Get more jobs and premium features based on your RapidJobsBot plan.
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 4,mt:-3 }}>
        <FormControlLabel
          control={<Switch checked={isAnnual} onChange={handleToggle} color="primary" />}
          label={
            <Typography variant="body1">
              {isAnnual ? 'Annual (Save up to 20%)' : 'Monthly'}
            </Typography>
          }
          labelPlacement="end"
        />
      </Box>

      <Grid container spacing={4} justifyContent="center">
  {plans.map((plan, index) => (
    <Grid item xs={12} sm={5} md={3} key={index}>
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%', // Ensures all boxes are the same height
          p: 4,
          textAlign: 'center',
          border: `2px solid ${selectedPlan === plan.name ? '#f39c12' : '#0E5263'}`,
          position: 'relative',
          margin:'-13px'
        }}
      >
        {plan.isPopular && (
          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: '#f39c12',
              color: 'white',
              padding: '5px 10px',
              fontWeight: 'bold',
              borderRadius: '4px',
            }}
          >
            Most Popular
          </Typography>
        )}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            {plan.name}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <Typography component="span" sx={{ fontWeight: 'bold' }}>
              ${isAnnual ? plan.annualPrice : plan.price}
            </Typography>{' '}
            USD {isAnnual ? '/ Year' : '/ Month'}
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontSize: '12px',
              backgroundColor: selectedPlan === plan.name ? '#f39c12' : '#0E5263',
            }}
            onClick={() => handleSelectPlan(plan)}
          >
            {plan.name === 'Free' ? 'Sign Up Free' : `Upgrade to ${plan.name}`}
          </Button>
        </Box>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
            {plan.name === 'Free'
              ? "What's Included"
              : 'All features in previous plans, and:'}
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {plan.features.map((feature, idx) => (
              <li key={idx}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CheckIcon sx={{ fontSize: '18px', color: '#0E5263', mr: 1 }} />
                  <Typography variant="body2" sx={{ fontSize: '12px' }}>
                    {feature}
                  </Typography>
                </Box>
              </li>
            ))}
          </ul>
        </Box>
      </Paper>
    </Grid>
  ))}
</Grid>


      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarSeverity === 'success' ? successMessage : errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default PremiumAccessPage;