import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  Grid,
  Link,
  InputAdornment,
  IconButton,
  Divider,
  Popover,
} from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import GitHubIcon from "@mui/icons-material/GitHub";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { assets } from "../../assets/assets";

const JobseekerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); 
  const [socialPlatform, setSocialPlatform] = useState(""); 

  const formData = { email, password };

  const socialMediaUrls = {
    google: "https://accounts.google.com/signin",
    facebook: "https://www.facebook.com/login",
    github: "https://github.com/login",
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password should be at least 6 characters";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/v1/api/jobseekers/login", formData);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/Home"; 
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  const handleSocialMediaLogin = (event, platform) => {
    setSocialPlatform(platform); 
    setAnchorEl(event.currentTarget); 
  };

  const handlePopoverClose = () => {
    setAnchorEl(null); 
  };

  const handlePopupLogin = () => {

    window.location.href = socialMediaUrls[socialPlatform];
  };

  const openPopover = Boolean(anchorEl);
  const popoverId = openPopover ? "social-media-popover" : undefined;

  return (
    <Box sx={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <Container maxWidth="xs">
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Login Details
          </Typography>

      
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
            <IconButton onClick={(e) => handleSocialMediaLogin(e, "google")}>
              <img src={assets.google} alt="Google Login" style={{ height: "50px" }} />
            </IconButton>
            <IconButton onClick={(e) => handleSocialMediaLogin(e, "facebook")}>
              <FaFacebookF size={40} color="#4267B2" />
            </IconButton>
            <IconButton onClick={(e) => handleSocialMediaLogin(e, "github")}>
              <GitHubIcon sx={{ fontSize: 40, color: "#333" }} />
            </IconButton>
          </Box>

          <Typography variant="body2" color="textSecondary" mb={2}>
            OR
          </Typography>

          <Typography  sx={{ fontWeight: 'bold',marginLeft:"-85%"}}>Email</Typography>
          <TextField
            fullWidth
        
            variant="outlined"
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
            autoComplete="off"
            sx={{
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "12px",
                  borderWidth: "2px",
                  borderColor: "#cccccc",
                },
                "&:hover fieldset": {
                  borderColor: "#1976d2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                },
              },
            }}
          />
     <Typography  sx={{ marginLeft:"-75%", fontWeight: 'bold' }}>Password</Typography>
          <TextField
            fullWidth
      
            variant="outlined"
            margin="normal"
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            autoComplete="new-password"
            sx={{
              borderRadius: "12px",
              backgroundColor: "#f5f5f5",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "12px",
                  borderWidth: "2px",
                  borderColor: "#cccccc",
                },
                "&:hover fieldset": {
                  borderColor: "#ccc",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                },
              },
            }}
          />

          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
            <Typography variant="body2">Remember me</Typography>
          </Box>

          {errorMessage && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {errorMessage}
            </Typography>
          )}

          <Button fullWidth variant="contained" color="primary" sx={{ mt: 2, mb: 2 }} onClick={handleSubmit}>
            Login
          </Button>

          <Grid container justifyContent="space-between">
            <Link href="/forgot-password" variant="body2">
              Forgot Password
            </Link>
            <Link href="/reset-password" variant="body2">
              Reset Password
            </Link>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2">
            Not a member yet?{" "}
            <Link href="/customstepper" variant="body2" color="primary">
              REGISTER
            </Link>{" "}
            now to get your job search started!
          </Typography>
        </Box>
      </Container>

    
      <Popover
        id={popoverId}
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="body2">
            You are about to log in with {socialPlatform.charAt(0).toUpperCase() + socialPlatform.slice(1)}. Proceed?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
            <Button onClick={handlePopoverClose}>Cancel</Button>
            <Button onClick={handlePopupLogin}>Proceed</Button>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};

export default JobseekerLogin;