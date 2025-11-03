import React from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  CardContent,
} from '@mui/material';
import { assets } from '../assets/assets';


const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  mobile: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/v1/api/contact/register',
        formData
      );
      alert(response.data.message);
      reset(); 
    } catch (error) {
      console.error('Error registering contact details:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 12, mb: 5 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          For <br /> Queries & Answers
        </Typography>

        <Paper
          elevation={6}
          sx={{
            p: 3,
            mt: 2,
            borderRadius: 2,
            boxShadow: 10,
            backgroundColor: 'white',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
                  Name
                </Typography>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="Your Name"
                      variant="outlined"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      sx={{
                        backgroundColor: 'whitesmoke',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
                  Mobile Number
                </Typography>
                <Controller
                  name="mobile"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="Your Mobile Number"
                      variant="outlined"
                      fullWidth
                      error={!!errors.mobile}
                      helperText={errors.mobile?.message}
                      sx={{
                        backgroundColor: 'whitesmoke',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
                  Your Email
                </Typography>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="Your Email Address"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={{
                        backgroundColor: 'whitesmoke',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        },
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>
                  Message
                </Typography>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      placeholder="Enter your Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth
                      error={!!errors.message}
                      helperText={errors.message?.message}
                      sx={{
                        backgroundColor: 'whitesmoke',
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        },
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Box textAlign="center" mt={3}>
              <Button
                type="submit"
              
                color="primary"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: 3,
                  textTransform: 'none',
                  fontWeight:"bold",
                  '&:hover': {
                    backgroundColor: '#0E5263',
                    color:"white"
                }
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>

      <Grid container>
        <Grid md={4} xs={12} sm={12}>
          <Box sx={{ m: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              Reach us here
            </Typography>
            <Typography variant="body2">info@rapidjobsbot.com</Typography>
            <Typography variant="body2">8712349669</Typography>
          </Box>
        </Grid>
        <Grid md={4} xs={12} sm={12}>
          <Box sx={{ m: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              We Live Here
            </Typography>
            <Typography variant="body2">
              Ground Floor DSL Abacus IT Park,
              <br />
              Survey Colony, Uppal, Hyderabad-500039.
            </Typography>
          </Box>
        </Grid>
        <Grid md={4} xs={12} sm={12}>
          <Box sx={{ m: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">
              We are available
            </Typography>
            <Typography variant="body2">Monday - Friday : 9:00 - 18:00</Typography>
            <Typography variant="body2">Saturday : 9:00 - 16:00</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ padding: 2, mt: 4, ml: 5, mr: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardContent>
              <a
                href="https://www.google.com/maps/place/DSL+Abacus+IT+Park,+Uppal,+Hyderabad-500039"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={assets.map}
                  alt="Map"
                  style={{ width: '80%', height: 'auto', borderRadius: '8px', cursor: 'pointer' }}
                />
              </a>
            </CardContent>
          </Grid>

          <Grid item xs={12} md={6}>
            <CardContent>
              <img
                src={assets.contactus}
                alt="Contact Us"
                style={{ width: '80%', height: 'auto', borderRadius: '8px' }}
              />
            </CardContent>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactForm;
