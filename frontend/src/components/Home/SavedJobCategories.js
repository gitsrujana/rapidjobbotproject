import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { assets } from '../../assets/assets';

const jobs = [
  {
    title: 'Software Engineer',
    location: 'Hyderabad',
    openings: 5,
    experience: 'Experienced only',
    salary: '50000 - 80000',
    bonus: 'Yes',
    description:
      'We are looking for a skilled Software Engineer to join our dynamic team. The ideal candidate should have experience in building scalable applications and collaborating with cross-functional teams.',
  },
  {
    title: 'Software Engineer',
    location: 'Hyderabad',
    openings: 15,
    experience: 'Freshers Only',
    salary: '60000 - 90000',
    bonus: 'Yes',
    description:
      'We are looking for a skilled Software Engineer to join our dynamic team. The ideal candidate should have experience in building scalable applications and collaborating with cross-functional teams.',
  },
];

const SavedJobCategories = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh', marginTop:'6%' }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Saved Job Categories
      </Typography>

      <Grid container justifyContent="center" spacing={3} sx={{ marginBottom: '20px' }}>
        <Grid item xs={12} md={4}>
          <img
            src={assets.savedjobs} 
            alt="Saved Jobs"
            style={{ width: '80%', borderRadius: '8px', height:'65%' }}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {jobs.map((job, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {job.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Location:</strong> {job.location}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Openings:</strong> {job.openings}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Experience:</strong> {job.experience}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Salary:</strong> {job.salary}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Bonus:</strong> {job.bonus}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {job.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={5}>
        <Typography variant="body1" gutterBottom>
          Save jobs that interest you and return to them at any moment. Whether you're in the middle
          of a search or looking to compare choices, our "Saved Jobs" tool keeps you organized and
          focused. Keep track of promising possibilities without fear of losing them.
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          THIS PAGE IS LOADING.....
        </Typography>
      </Box>
    </Box>
  );
};

export default SavedJobCategories;
