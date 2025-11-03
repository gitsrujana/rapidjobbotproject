import React from "react";
import { Box, Typography, Grid, Card, CardContent, TextField, FormGroup, FormControlLabel, Checkbox, Avatar, Button, CardMedia, Stack, CardActions } from "@mui/material";
import Rating from '@mui/material/Rating';
import { assets } from "../assets/assets";


const companies = [
  {
    logo: "https://lh6.googleusercontent.com/-3R26hGFGgYo/AAAAAAAAAAI/AAAAAAAAR4s/3Yuo0SvwuJE/s0-c-k-no-ns/photo.jpg",
    name: "Actalent Services",
    rating: 3.4,
    reviews: "272 reviews",
    description: "We are a global leader in engineering & sciences providing talent solutions.",
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/019/017/437/non_2x/amazon-logo-free-png.png",
    name: "Cognizant",
    rating: 3.8,
    reviews: "46.1k+ reviews",
    description: "A global leader in IT services and consulting, providing innovative solutions.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png",
    name: "Hitachi Energy",
    rating: 4.2,
    reviews: "583 reviews",
    description: "Advancing a sustainable energy future through advanced technology solutions.",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiojkclhHlQDBapQggZ0QGWSt7xbaLAk7FA&s",
    name: "Google",
    rating: 4.7,
    reviews: "1M+ reviews",
    description: "Innovating and shaping the future of technology, from search to AI.",
  },
  {
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=284,fit=crop,q=95/AGBMO5lB9GS3ZaDa/microsoftteams-image-120-meP1QWLqqrceVRK7.png",
    name: "Microsoft",
    rating: 4.6,
    reviews: "800k+ reviews",
    description: "Empowering individuals and organizations through transformative technology.",
  },
  {
    logo: "data:image/jpeg;base64,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",
    name: "Apple",
    rating: 4.8,
    reviews: "2M+ reviews",
    description: "Creating innovative consumer electronics and digital services.",
  },
  {
    logo: "https://lh6.googleusercontent.com/-3R26hGFGgYo/AAAAAAAAAAI/AAAAAAAAR4s/3Yuo0SvwuJE/s0-c-k-no-ns/photo.jpg",
    name: "Actalent Services",
    rating: 3.4,
    reviews: "272 reviews",
    description: "We are a global leader in engineering & sciences providing talent solutions.",
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/019/017/437/non_2x/amazon-logo-free-png.png",
    name: "Cognizant",
    rating: 3.8,
    reviews: "46.1k+ reviews",
    description: "A global leader in IT services and consulting, providing innovative solutions.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png",
    name: "Hitachi Energy",
    rating: 4.2,
    reviews: "583 reviews",
    description: "Advancing a sustainable energy future through advanced technology solutions.",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiojkclhHlQDBapQggZ0QGWSt7xbaLAk7FA&s",
    name: "Google",
    rating: 4.7,
    reviews: "1M+ reviews",
    description: "Innovating and shaping the future of technology, from search to AI.",
  },
  {
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=284,fit=crop,q=95/AGBMO5lB9GS3ZaDa/microsoftteams-image-120-meP1QWLqqrceVRK7.png",
    name: "Microsoft",
    rating: 4.6,
    reviews: "800k+ reviews",
    description: "Empowering individuals and organizations through transformative technology.",
  },
  {
    logo: "https://lh6.googleusercontent.com/-3R26hGFGgYo/AAAAAAAAAAI/AAAAAAAAR4s/3Yuo0SvwuJE/s0-c-k-no-ns/photo.jpg",
    name: "Actalent Services",
    rating: 3.4,
    reviews: "272 reviews",
    description: "We are a global leader in engineering & sciences providing talent solutions.",
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/019/017/437/non_2x/amazon-logo-free-png.png",
    name: "Cognizant",
    rating: 3.8,
    reviews: "46.1k+ reviews",
    description: "A global leader in IT services and consulting, providing innovative solutions.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png",
    name: "Hitachi Energy",
    rating: 4.2,
    reviews: "583 reviews",
    description: "Advancing a sustainable energy future through advanced technology solutions.",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiojkclhHlQDBapQggZ0QGWSt7xbaLAk7FA&s",
    name: "Google",
    rating: 4.7,
    reviews: "1M+ reviews",
    description: "Innovating and shaping the future of technology, from search to AI.",
  },
  {
    logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=284,fit=crop,q=95/AGBMO5lB9GS3ZaDa/microsoftteams-image-120-meP1QWLqqrceVRK7.png",
    name: "Microsoft",
    rating: 4.6,
    reviews: "800k+ reviews",
    description: "Empowering individuals and organizations through transformative technology.",
  },
];

const Companycard = () => {
  const [value, setValue] = React.useState(2);
  return (
    <>
      {/* Popular Job Categories Section with the new layout */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#0D5263",
          color: "white",
          overflow: "hidden",
          width:"100%",
          height:"400px",
          mt:8
        }}
      >
        <Grid container sx={{mt:10,
 

        }}>
  <Grid item md={4} sx={{marginLeft:"20%"}}>
  <Box >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
              Popular Job Categories
            </Typography>
            <Typography variant="body1" textAlign="justify" mt={5}>
              Browse a variety of popular employment categories, including technology, finance, healthcare, and creative areas. RapidJobsBot allows you to research top positions in your field of interest, giving you access to industry-specific opportunities. No more tedious scrolling—find your career path with a few clicks!
            </Typography>
          </Box>
  </Grid>


  <Grid item md={5} mt={-4} >
  <Box
            sx={{
              flex: 1,
              position: "relative",
             
              clipPath: "polygon(10% 0%, 100% 0, 100% 100%, 0 100%)",
              overflow: "hidden",  
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={assets.popularjobs}
              alt="Popular Job Categories"
              style={{
                width: "50%", 
                height: "auto", 
               
                objectFit: "cover", 
             
                border:"10px solid white"
              }}
            />
          </Box>
</Grid>

</Grid>
       
  </Box>

      
       

    
   
        <Grid container spacing={2} mt={3} ml={3}>
          {/* Filter 1 */}
          <Grid item xs={12} md={2.5}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  All Filters
                </Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="IT Services (7)" />
                  <FormControlLabel control={<Checkbox />} label="BFSI (6)" />
                  <FormControlLabel control={<Checkbox />} label="BPM (2)" />
                  <FormControlLabel control={<Checkbox />} label="Infrastructure (1)" />
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>

          {/* Filter 2 */}
          <Grid item xs={12} md={2.5} ml={2}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Industry
                </Typography>
                <TextField fullWidth placeholder="Search Industry" size="small" />
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="IT Services & Consulting (7)" />
                  <FormControlLabel control={<Checkbox />} label="Financial Services (5)" />
                  <FormControlLabel control={<Checkbox />} label="BPO / Call Centre (2)" />
                  <FormControlLabel control={<Checkbox />} label="FinTech / Payments (2)" />
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>

          {/* Filter 3 */}
          <Grid item xs={12} md={2.5} ml={2}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Company Type
                </Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Foreign MNC (14)" />
                  <FormControlLabel control={<Checkbox />} label="Corporate (6)" />
                  <FormControlLabel control={<Checkbox />} label="Indian MNC (2)" />
                  <FormControlLabel control={<Checkbox />} label="Startup (6)" />
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>

          {/* Filter 4 */}
          <Grid item xs={12} md={2.5} ml={2}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Location
                </Typography>
                <TextField fullWidth placeholder="Search Location" size="small" />
                <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Remote (7)" />
                  <FormControlLabel control={<Checkbox />} label="India (6)" />
                  <FormControlLabel control={<Checkbox />} label="USA (4)" />
                  <FormControlLabel control={<Checkbox />} label="United Kingdom (2)" />
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
   

     
      <Grid container spacing={3} sx={{ marginTop: "30px",backgroundColor:"whitesmoke"}}>
        
        {companies.map((company, index) => (
         
         <Grid md={3} padding={4}>
          <Card sx={{border:"2px solid whitesmoke",borderRadius:"10px",":hover": { boxShadow: 6, transform: "scale(1.02)" },
                transition: "transform 0.2s ease-in-out",}}>
            <CardMedia 
            sx={{width:"30%",borderRadius:"50%",marginLeft:"40%",mt:2}}
            component='img'
            src={company.logo}
            />
              <Box sx={{backgroundColor:"aliceblue",margin:"5%",":hover": { boxShadow: 6, transform: "scale(1.02)" },
                transition: "transform 0.2s ease-in-out",}}>
          <CardContent>
            <Typography sx={{color:"black"}}>{company.name}</Typography>
          
          <Stack direction='row' style={{marginLeft:"2%",marginTop:"2%",}} >
          <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
   <Typography sx={{fontSize:"15px"}}>{company.rating}</Typography> 
   </Stack> 
   <Typography sx={{fontSize:"15px"}}>{company.reviews}</Typography> 
         
         
          </CardContent>
          </Box>
          <Typography sx={{textAlign:"justify" ,fontSize:"14px",mt:5,margin:"3%"}}>{company.description}</Typography>
          <CardActions>
            <Button variant="contained" sx={{textTransform:"none",marginLeft:"30%",borderRadius:5}}>view jobs</Button>
          </CardActions>
          </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Companycard;