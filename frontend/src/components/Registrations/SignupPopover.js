// import React from 'react';
// import { Box, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import { assets } from '../../assets/assets';
// import { NavLink } from 'react-router-dom';

// function SignupPopover() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100vw',
//         height: '100vh',
//         position: 'relative',
//         overflow: 'hidden'
//       }}
//     >
//       {/* <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: -40,
       
//           width: '100vw',
//           height: '100vh',
//           backgroundImage: `url(${assets.homepage})`,
//           backgroundSize: 'cover', // Ensures the background covers the entire screen
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           filter: 'blur(6px)',
//           zIndex: -1,
//           transform: 'scale(1.05)', // Slightly increases the size for a better fit
//         }}
//       /> */}

//       <Box
//         sx={{
//           width: '100%',
//           maxWidth: 800,
//           bgcolor: 'white',
//           borderRadius: 2,
//           boxShadow: 5,
//           textAlign: 'center',
//           padding: 4,
//           position: 'relative',
//           zIndex: 1,
//           transform: 'translate(-50%, -50%)',
//         }}
//       >
//         <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
//           What do you want to do?
//         </Typography>

//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} sm={6}>
//             <NavLink to='/jobseeker' style={{ textTransform: "none", textDecoration: "none", color: "white" }}>
//               <Card sx={{ borderRadius: 2, boxShadow: 4 }}>
//                 <CardMedia
//                   component="img"
//                   image={assets.jobseeker} 
//                   alt="Job Seeker"
//                   sx={{ height: 200 }}
//                 />
//                 <CardContent
//                   sx={{
//                     backgroundColor: '#004d61',
//                     color: 'white',
//                     textAlign: 'center',
//                     paddingY: 2,
//                   }}
//                 >
//                   <Typography variant="h6" fontWeight="bold">
//                     I want a job
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </NavLink>
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <NavLink to='/Employer' style={{ textTransform: "none", textDecoration: "none", color: "white" }}>
//               <Card sx={{ borderRadius: 2, boxShadow: 4 }}>
//                 <CardMedia
//                   component="img"
//                   image={assets.employer} 
//                   alt="Employer"
//                   sx={{ height: 200 }}
//                 />
//                 <CardContent
//                   sx={{
//                     backgroundColor: '#004d61',
//                     color: 'white',
//                     textAlign: 'center',
//                     paddingY: 2,
//                   }}
//                 >
//                   <Typography variant="h6" fontWeight="bold">
//                     I want to hire people
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </NavLink>
//           </Grid>
//         </Grid>
//       </Box>
   
//     </Box>
//   );
// }

// export default SignupPopover;
