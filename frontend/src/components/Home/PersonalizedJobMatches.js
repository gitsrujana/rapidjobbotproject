
  
  import React, { useState } from "react";
  import {
    Box,
    Typography,
    FormControlLabel,
    Checkbox,
    Grid,
    Button,
    Stack,
    useMediaQuery,
  } from "@mui/material";
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
  import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
  import ArticleIcon from '@mui/icons-material/Article';
  import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
  import { assets } from "../../assets/assets";
  
  const jobPosts = [
    {
      title: "After market sales and marketing",
      company: "Talent And Tracking Consultants",
      experience: "20-25 Yrs",
      salary: " 20-32.5 LPA",
      location: "Kolkata",
      description: "The candidate should be able to conduct market research, analyze share of...",
      tags: ["Aftersales", "After Market Service", "After Sales Support", "Spare Parts"],
      postedDate: "7 Days Ago",
    },
    {
      title: "Customer Support Executive",
      company: "Aditi Tracking Support",
      experience: "1-2 Yrs",
      salary: "Not disclosed",
      location: "Bengaluru, Mumbai",
      description: "Roles & Responsibilities of Customer Support Executive (Exp 0-3 Years)...",
      tags: ["Customer Care Service", "Customer Service", "CSE", "Customer Care"],
      postedDate: "1 Day Ago",
    },
    {
      title: "Quality Engineer",
      company: "Talent And Tracking Consultants",
      experience: "4-9 Yrs",
      salary: "Not disclosed",
      location: "Hyderabad, Bengaluru",
      description: "Preferred from heavy machinery industry QA department. Shall have good k...",
      tags: ["Inspection", "Vendor end job inspection", "Outside Micrometer", "Bore Gauge"],
      postedDate: "26 Days Ago",
    },
    {
      title: "After market sales and marketing",
      company: "Talent And Tracking Consultants",
      experience: "20-25 Yrs",
      salary: " 20-32.5 Lacs PA",
      location: "Kolkata",
      description: "The candidate should be able to conduct market research, analyze share of...",
      tags: ["Aftersales", "After Market Service", "After Sales Support", "Spare Parts"],
      postedDate: "7 Days Ago",
    },
    {
      title: "Customer Support Executive",
      company: "Aditi Tracking Support",
      experience: "1-2 Yrs",
      salary: "Not disclosed",
      location: "Bengaluru, Mumbai",
      description: "Roles & Responsibilities of Customer Support Executive (Exp 0-3 Years)...",
      tags: ["Customer Care Service", "Customer Service", "CSE", "Customer Care"],
      postedDate: "1 Day Ago",
    },
    {
      title: "Quality Engineer",
      company: "Talent And Tracking Consultants",
      experience: "4-9 Yrs",
      salary: "Not disclosed",
      location: "Hyderabad, Bengaluru",
      description: "Preferred from heavy machinery industry QA department. Shall have good k...",
      tags: ["Inspection", "Vendor end job inspection", "Outside Micrometer", "Bore Gauge"],
      postedDate: "26 Days Ago",
    },
  ];
  
  
  const filterData = {
    "Work mode": [
      { label: "Work from office", count: 67985 },
      { label: "Hybrid", count: 2529 },
      { label: "Remote", count: 1923 },
      { label: "Temp. WFH due to...", count: 3 },
    ],
    Department: [
      { label: "Engineering-Software", count: 18531 },
      { label: "Sales&Business Development", count: 14090 },
      { label: "Marketing&Communications", count: 5522 },
      { label: "Customer Success", count: 3494 },
    ],
    Location: [
      { label: "Bengaluru", count: 17753 },
      { label: "Delhi / NCR", count: 13611 },
      { label: "Mumbai (All Areas)", count: 10906 },
      { label: "Hyderabad", count: 8805 },
    ],
    Salary: [
      { label: "0-3 Lakhs", count: 12108 },
      { label: "3-6 Lakhs", count: 39011 },
      { label: "6-10 Lakhs", count: 44521 },
      { label: "10-15 Lakhs", count: 26685 },
    ],
    "Company type": [
      { label: "Engineering-Software", count: 18531 },
      { label: "Sales&Business Development", count: 14090 },
      { label: "Marketing&Communications", count: 5522 },
      { label: "Customer Success", count: 3494 },
    ],
    "Role category": [
      { label: "Bengaluru", count: 17753 },
      { label: "Delhi / NCR", count: 13611 },
      { label: "Mumbai (All Areas)", count: 10906 },
      { label: "Hyderabad", count: 8805 },
    ],
    Duration: [
      { label: "Engineering-Software", count: 18531 },
      { label: "Sales&Business Development", count: 14090 },
      { label: "Marketing&Communications", count: 5522 },
      { label: "Customer Success", count: 3494 },
    ],
    Education: [
      { label: "Bengaluru", count: 17753 },
      { label: "Delhi / NCR", count: 13611 },
      { label: "Mumbai (All Areas)", count: 10906 },
      { label: "Hyderabad", count: 8805 },
    ],
    Industry: [
      { label: "0-3 Lakhs", count: 12108 },
      { label: "3-6 Lakhs", count: 39011 },
      { label: "6-10 Lakhs", count: 44521 },
      { label: "10-15 Lakhs", count: 26685 },
    ],
    "Top companiese": [
      { label: "Engineering-Software", count: 18531 },
      { label: "Sales&Business Development", count: 14090 },
      { label: "Marketing&Communications", count: 5522 },
      { label: "Customer Success", count: 3494 },
    ],
    "Posted by ": [
      { label: "Bengaluru", count: 17753 },
      { label: "Delhi / NCR", count: 13611 },
      { label: "Mumbai (All Areas)", count: 10906 },
      { label: "Hyderabad", count: 8805 },
    ],
  };
  
  const PersonalizedJobMatches = () => {
    const isMobile = useMediaQuery("(max-width:768px)"); 
    const [expandedSections, setExpandedSections] = useState({});
    const [selectedFilters, setSelectedFilters] = useState({});
  
    const handleExpand = (category) => {
      setExpandedSections((prev) => ({
        ...prev,
        [category]: !prev[category],
      }));
    };
  
    const handleCheckboxChange = (category, label) => {
      setSelectedFilters((prev) => ({
        ...prev,
        [category]: {
          ...(prev[category] || {}),
          [label]: !(prev[category]?.[label] || false),
        },
      }));
    };
  
    const filterJobs = () => {
      const activeFilters = Object.entries(selectedFilters).filter(
        ([_, filters]) => Object.values(filters).some((value) => value)
      );
  
      if (activeFilters.length === 0) return jobPosts;
  
      return jobPosts.filter((job) => {
        return activeFilters.every(([category, filters]) => {
          const selectedLabels = Object.keys(filters).filter((key) => filters[key]);
          if (category === "Location") {
            return selectedLabels.some((label) => job.location.includes(label));
          }
          return true;
        });
      });
    };
  
    const renderFilters = (category, items) => {
      const expanded = expandedSections[category];
      return (
        <Box key={category} sx={{ marginBottom: 3 }}>
          <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>
            {category}
          </Typography>
          <Box>
            {items.slice(0, expanded ? items.length : 3).map((item) => (
              <FormControlLabel
                key={item.label}
                control={
                  <Checkbox
                    checked={selectedFilters[category]?.[item.label] || false}
                    onChange={() => handleCheckboxChange(category, item.label)}
                  />
                }
                label={`${item.label} (${item.count})`}
                sx={{ display: "block" }}
              />
            ))}
          </Box>
          {items.length > 3 && (
            <Button
              variant="text"
              size="small"
              onClick={() => handleExpand(category)}
              sx={{ textTransform: "none", mt: 1 }}
            >
              {expanded ? "View Less" : "View More"}
            </Button>
          )}
        </Box>
      );
    };
  
    return (
  <>
     
      
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
          <Typography variant="h4" fontWeight="bold" gutterBottom>
              Personalized Job Matches
            </Typography>
            <Typography variant="body1" lineHeight={1.8}>
              Get tailored job recommendations based on your talents,
              experience, and career goals. RapidJobsBot matches you with
              opportunities that match your unique profile, making your job
              search easier and more productive. Find opportunities that are a
              good fit for you and you'll be able to find your ideal career
              sooner!
            </Typography>

        </Box>

     
        <img
          src={assets.personalized}
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

      <Box sx={{ padding: 3 }}>
        <Grid container spacing={3}>
       <Grid item xs={12} md={5}>
          {/* Filter Section */}
          <Box
        sx={{
          padding: 2,
          border: "1px solid #ddd",
          borderRadius: 2,
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: 550,
          margin:"1%"
         
        }}
      >
        <Typography variant="h6" align="center" sx={{ mb: 2,fontWeight:"bold" }}>
          All Filters
        </Typography>
        <Grid container spacing={1} sx={{textAlign:"justify"}}>
          {Object.entries(filterData).map(([category, items], index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={category}
            >
              {renderFilters(category, items)}
            </Grid>
          ))}
        </Grid>
      </Box>
      </Grid>
          {/* Job Posts Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: 2,
               
              
              }}
            >
              {filterJobs().map((job, index) => (
                <Box
                  key={index}
                  sx={{
                    padding: 2,
                    border: "1px solid #ddd",
                    borderRadius: 4,
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    marginBottom: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" textAlign='start' gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" textAlign='start' gutterBottom>
                    {job.company}
                  </Typography>
                
  
               <Stack direction='row'  >
                  <Typography variant="body2" color="textSecondary" textAlign='start' sx={{ mb: 1}}>
                  <WorkOutlineIcon sx={{height:"40%",width:"5%"}} /> {job.experience} |<CurrencyRupeeIcon sx={{height:"40%",width:"5%"}} /> {job.salary}   | <LocationOnIcon sx={{height:"40%",width:"5%"}}/>{job.location}
                  </Typography>
                  </Stack>
                  <Stack direction='row'>
                  <Typography variant="body2" textAlign='start' sx={{ mb: 1 }}>
                  <ArticleIcon sx={{width:"4%",height:"45%"}}/> {job.description}
                  </Typography>
                  </Stack>
                 
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {job.tags.map((tag, idx) => (
                      <Typography
                        key={idx}
                        variant="caption"
                        color="primary"
                        sx={{ fontWeight:"bold", padding: "2px 6px", borderRadius: 1 }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Box>
                 <Grid container>
             <Grid item md={8} xs={12}>
             <Typography variant="body1" color="textSecondary" textAlign='start' sx={{fontSize:"12px",mt:3}}>
                    Posted {job.postedDate}
                  </Typography>
             </Grid>
             <Grid item md={3} xs={12}>
             <Stack direction='row' sx={{mt:2,mb:2}}>
                    <BookmarkBorderIcon />
                   <Typography  sx={{fontSize:"15px",color:"blue"}}> save</Typography></Stack>
             </Grid>
                 </Grid>
                
                
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      </>
    );
  };
  
  export default PersonalizedJobMatches;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  