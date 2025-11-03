import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Button, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { assets } from '../../assets/assets';

function InterviewPreparation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    < >
   
      <Box
        elevation={3}
        sx={{
         
          backgroundColor: '#0E5263',
          color: 'white',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          marginBottom: '16px',
          height: '400px',
          mt:10 
        }}
      >
  
        <Box
          sx={{
            flex: 1,
            textAlign: isMobile ? 'center' : 'left',
            order: isMobile ? 2 : 1,
            mt: isMobile ? 2 : 0,
            ml:5
          }}
        >
          <Typography variant="h4" gutterBottom>
            Interview Preparation
          </Typography>
          <Typography variant="body1">
            Prepare to impress with personalized interview tips and resources. RapidJobsBot provides advice on common interview questions,
            company-specific insights, and tailored tips to help you confidently present your talents. Prepare to make a lasting impression
            and increase your chances of landing the job!
          </Typography>
        </Box>

        <img
          src={assets.interview}
          alt="Job Categories"
          style={{
            width: isMobile ? '100%' : '50%',
            height: '100%', 
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            objectFit: 'cover', 
            order: isMobile ? 1 : 2,
            clipPath: 'polygon(30% 0%, 100% 0, 100% 100%, 0 100%)',
          }}
        />
      </Box>
      <Box sx={{margin:"5%"}}>
      <Typography variant="h5" sx={{ mt: 4, ml:3,mb: 2,textAlign:"start" , fontWeight:"bold"}}>
        Tips
      </Typography>
      
        <Typography variant="body1" textAlign="start" fontWeight="bold" marginLeft="3px">Research the company:</Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Look up recent news, company culture, and role specifics." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Interview Prep Tips:" />
          </ListItem>
          <List sx={{ listStyleType: 'circle', pl: 4 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText primary="Step-by-step preparation guides." />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText primary="Practice scenarios and common interview questions." />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText primary="Explore trending job categories and industries to stay informed." />
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <ListItemText primary="Demonstrates genuine interest and prepares for relevant questions." />
            </ListItem>
          </List>
        </List>

        <Typography variant="h6" textAlign="start" fontWeight="bold">Know Your Resume:</Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Be ready to discuss experiences confidently." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Highlight achievements, projects, and skills relevant to the role." />
          </ListItem>
        </List>

        <Typography variant="h6" textAlign="start" fontWeight="bold">Prepare Key Stories:</Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Use the STAR method (situation, task, action, result) for structured responses." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Ideal for showing problem-solving, teamwork, and leadership." />
          </ListItem>
        </List>
      

  
      <Typography variant="h5" sx={{ mt: 4,ml:3, mb: 2 ,textAlign:"start" ,fontWeight:"bold" }}>
        Tools & Resources
      </Typography>
    
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Mock Interviews: AI-driven practice interviews with feedback on responses." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Question Bank: Curated list of common questions by job category and level." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Answer Structuring Tool: STAR method templates to help organize responses." />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Video Interview Practice: Record answers for review on body language, tone, and clarity." />
          </ListItem>
        </List>
        <Button  sx={{ mt: 2,textTransform:"none",color:"black" }}>
          View More
        </Button>
      
      </Box>
    </>
    
  );
}

export default InterviewPreparation;