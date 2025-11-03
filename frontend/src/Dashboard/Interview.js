// App.js
import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const Interview = () => {
  const interviewData = [
    { applicant: 'Parmesan, Jean', date: '2/20/2013', time: '09:45 AM' },
    { applicant: 'Smith, Angelo', date: '2/18/2013', time: '09:45 AM' },
    { applicant: 'Michaelson, Gil', date: '2/13/2013', time: '09:45 AM' },
    { applicant: 'Priyam, Shilikhin', date: '2/11/2013', time: '09:45 AM' },
    { applicant: 'Winters Edgar', date: '2/2/2013', time: '09:45 AM' },
    { applicant: 'Evans, Sarah', date: '1/28/2013', time: '09:45 AM' },
    { applicant: 'Jones, George', date: '1/16/2013', time: '10:45 AM' },
    { applicant: 'Ethan, June', date: '11/27/2012', time: '12:45 PM' },
    { applicant: 'Beffel, Ann', date: '10/30/2012', time: '09:45 AM' },
  ];

  return (
    <Box
      sx={{
        maxWidth: '900px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Employer Dashboard
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Interviews scheduled for today
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Applicant</strong></TableCell>
              <TableCell><strong>Interview Date</strong></TableCell>
              <TableCell><strong>Interview Time</strong></TableCell>
              <TableCell align="center"><strong>Calendar</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {interviewData.map((interview, index) => (
              <TableRow key={index}>
                <TableCell>{interview.applicant}</TableCell>
                <TableCell>{interview.date}</TableCell>
                <TableCell>{interview.time}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => alert(`Added ${interview.applicant}'s interview to calendar!`)}
                  >
                    Add to Calendar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        align="center"
        color="textSecondary"
        sx={{ marginTop: '20px', fontStyle:'inherit' }}
      >
        THIS PAGE IS LOADING...
      </Typography>
    </Box>
  );
};

export default Interview;
