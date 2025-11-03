import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  InputAdornment,
  IconButton,
  Popover,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JobSeeker = ({ handleNext }) => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    surname: "",
    email: "",
    confirmPassword: "",
    password: "",
    mobileNumber: "",
    workStatus: "",
    promotions: false,
    otp: "",
    resume: null,
  });
  const navigate = useNavigate();

  const handleFresherClick = () => {
    navigate("/fresher");
  };

  const handleExperiencedClick = () => {
    navigate("/experienced");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "confirmPassword" || name === "password") {
      setPasswordError("");
    }
  };
  const handleFileChange = (e) => {
  setFormData({
    ...formData,
    resume: e.target.files[0],
  });
};

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleOtpRequest = async (event) => {
    setAnchorEl(event.currentTarget);
    try {
      await axios.post("http://localhost:5000/v1/api/jobseekers/send-otp", {
        email: formData.email,
      });
      setOtpSent(true);
      setOtpError("");
    } catch (error) {
      console.error("Error sending OTP:", error);
      setOtpError("Failed to send OTP. Please try again.");
    }
  };

  const handleOtpVerify = async () => {
    try {
      await axios.post("http://localhost:5000/v1/api/jobseekers/verify-otp", {
        email: formData.email,
        otp: formData.otp,
      });
      alert("OTP verified successfully!");
    } catch (error) {
      setOtpError("Invalid OTP. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== "")
    );

    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/jobseekers/register",
        filteredData,
        {
        headers: {
          'Content-Type': 'application/json',
      },
    }
      );
      console.log(response.data);
      alert(response.data.message);
      handleNext();
    } catch (error) {
      console.error("Error registering job seeker:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <Container maxWidth="md" >
      <Box
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 4,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          border: "1px solid #ddd",
          marginTop:"5%"
        }}
      >
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Create your AI Job Portal Profile
        </Typography>
        <Typography variant="body2" align="center" sx={{ fontWeight: "bold" }}>
          Search & apply to jobs from India’s No.1 Job Site
        </Typography>

        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
          <Typography variant="h6" fontWeight="bold">
            Personal Details
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
            <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>First Name</Typography>
              <TextField
                
                name="firstName"
                variant="outlined"
                fullWidth
                required
                value={formData.firstName}
                onChange={handleChange}
                sx={{
                  boxShadow: 1,
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    "& fieldset": {
                      borderColor: "#ddd",
                     
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Middle Name</Typography>
              <TextField
              
                name="middleName"
                variant="outlined"
                fullWidth
                value={formData.middleName}
                onChange={handleChange}
                sx={{
                  boxShadow: 1,
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    "& fieldset": {
                      borderColor: "#ddd",  
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Last Name</Typography>
              <TextField
              
                name="lastName"
                variant="outlined"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                sx={{
                  boxShadow: 1,
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    "& fieldset": {
                      borderColor: "#ddd", 
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Surname</Typography>
              <TextField
                name="surname"
                variant="outlined"
                fullWidth
                required
                value={formData.surname}
                onChange={handleChange}
                sx={{
                  boxShadow: 1,
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    "& fieldset": {
                      borderColor: "#ddd", 
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={7}>
            <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Email ID</Typography>
              <TextField
             
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleChange}
                helperText="We'll send relevant jobs and updates to this email."
                sx={{
                  boxShadow: 1,
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    "& fieldset": {
                      borderColor: "#ddd", 
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Button
                variant="contained"
                onClick={handleOtpRequest}
                disabled={!formData.email}
                sx={{
                  boxShadow: 2,
                  fontWeight: "bold",
                  backgroundColor: "#333",
                  borderRadius: 3,
                }}
              >
                Verify Email
              </Button>
            </Grid>

            <Popover
            sx={{width:"74%",marginLeft:"2%",mt:2}}
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <Box p={2} sx={{ boxShadow: 2 }}>
              <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Enter OTP</Typography>
                <TextField
                  name="otp"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.otp}
                  onChange={handleChange}
                  error={!!otpError}
                  // helperText={otpError || "Enter the OTP sent to your email"}
                  sx={{
                    boxShadow: 1,
                    borderRadius: 3,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 3,
                      "& fieldset": {
                        borderColor: "#ddd",  
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOtpVerify}
                  sx={{ mt: 1, boxShadow: 2, fontWeight: "bold",textTransform:"none" ,ml:10}}
                >
                  Verify OTP
                </Button>
              </Box>
            </Popover>

            <Grid item xs={12} md={8}>
            <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Password</Typography>
              <TextField
          
                name="password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                required
                value={formData.password}
                onChange={handleChange}
                helperText="Minimum 6 characters."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  boxShadow: 1,
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    "& fieldset": {
                      borderColor: "#ddd",  
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
            <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Confirm Password</Typography>
              <TextField
               
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                error={!!passwordError}
                helperText={passwordError}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={toggleConfirmPasswordVisibility}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  boxShadow: 1,
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    "& fieldset": {
                      borderColor: "#ddd",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
            <Typography  sx={{ textAlign: 'start', fontWeight: 'bold' }}>Mobile Number</Typography>
              <TextField
                name="mobileNumber"
                variant="outlined"
                fullWidth
                required
                value={formData.mobileNumber}
                onChange={handleChange}
                sx={{
                  boxShadow: 1,
                  borderRadius: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    "& fieldset": {
                      borderColor: "#ddd",  
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <Button
                variant="contained"
                onClick={handleFresherClick}
                fullWidth
                startIcon={<SchoolIcon />}
                sx={{
                  boxShadow: 2,
                  fontWeight: "bold",
                  backgroundColor: "#333",
                  borderRadius: 3,
                }}
              >
                I'm Fresher
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                onClick={handleExperiencedClick}
                fullWidth
                startIcon={<WorkIcon />}
                sx={{
                  boxShadow: 2,
                  fontWeight: "bold",
                  backgroundColor: "#333",
                  borderRadius: 3,
                }}
              >
                I'm Experienced
              </Button>
            </Grid>
        <Grid item xs={12} md={8}>
  <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }}>Upload Resume</Typography>
  <Button
   
    component="label"
    sx={{
      width: "50%",
      boxShadow: 1,
      borderRadius: 3,
      textAlign: "left",
      marginLeft:"-50%"
    }}
  >
    {formData.resume ? formData.resume.name : "Choose Resume File"}
    <input
      type="file"
      hidden
      accept=".pdf,.doc,.docx"
      onChange={handleFileChange}
    />
  </Button>
</Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.promotions}
                    onChange={handleChange}
                    name="promotions"
                    color="primary"
                  />
                }
                label="Send me career-related mails and updates."
                sx={{ fontWeight: "bold" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                type="submit"
              
                color="primary"
                fullWidth
                sx={{
                  fontWeight: "bold",
                  boxShadow: 2,
                  marginLeft:"250px",
                  borderRadius: 3,
                  textTransform:"none",
                  '&:hover': {
                    backgroundColor: '#0E5263',
                    color:"white"
                }}
              }
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default JobSeeker;
