import React, { useState } from "react";
import { Box, useMediaQuery, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import JobSeeker from "./Registrations/Jobseeker";
import ProfessionalSkills from "./Registrations/ProfessionalSkills";
import EducationalDetails from "./Registrations/EducationalDetails";
import Personaldetails from "./Registrations/PersonalDetails";


const steps = ["Personal details", "Educational details", "Professional details","other details"];


const ArrowStepLabel = styled(Box)(({ theme, active,}) => ({
  backgroundColor: active ? "#1e88e5" : "#043B59", 
  color: "white",
  padding: "12px 20px",
  borderRadius: "10px 0 0 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  fontSize: "14px",
  cursor: "pointer",
 
  "&:after": {
    content: '""',
    position: "absolute",
    top: "0",
    right: "-10px",
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    borderLeft: `20px solid ${active ? "#1e88e5" : "#043B59"}`,
    zIndex: "1",
  },
 
}));


const CustomStepperForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

 
  const handleStepClick = (index) => {
    setActiveStep(index);
  };
  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const renderFormContent = () => {
    switch (activeStep) {
      case 0:
        return <JobSeeker handleNext={handleNext}/>;
      case 1:
        return <EducationalDetails handleNext={handleNext} handleBack={handleBack}/>;
      case 2:
        return <ProfessionalSkills  handleNext={handleNext} handleBack={handleBack}/>;
        case 3:
          return <Personaldetails  handleNext={handleNext} handleBack={handleBack}/>;
  
      default:
        return null;
    }
  };

  return (
  
     <>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 ,mt:13,
        marginLeft:isSmallScreen?"10%":"0"
      }}>
        {steps.map((label, index) => (
          <ArrowStepLabel
            key={index}
            active={index === activeStep}
            onClick={() => handleStepClick(index)}
          >
            {label}
          </ArrowStepLabel>
        ))}
      </Box>

    
      <Box>{renderFormContent()}</Box>
      </>
  );
};

export default CustomStepperForm;
