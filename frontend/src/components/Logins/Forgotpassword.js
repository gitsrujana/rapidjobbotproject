import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Email validation
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/jobseekers/forgot-password",
        { email }
      );
      setSuccessMessage(response.data.message);
      setShowOtpInput(true); // Show OTP input on success
    } catch (error) {
      setError(error.response?.data?.message || "Error sending password reset request");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!otp) {
      setError("OTP is required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/jobseekers/verify-otp",
        { email, otp }
      );
      setSuccessMessage(response.data.message);
      setTimeout(() => {
        navigate("/reset-password"); // Redirect to Reset Password page after successful OTP verification
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Invalid OTP. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        mt: 13,
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: "400px",
        mx: "auto",
        bgcolor: "#ffffff",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        Forgot Password
      </Typography>

      {!showOtpInput ? (
        <>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                bgcolor: "#f9f9f9",
                "& fieldset": {
                  borderColor: "#ccc",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  borderWidth: "2px",
                },
              },
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              py: 1,
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "8px",
            }}
            onClick={handleEmailSubmit}
          >
            Send OTP
          </Button>
        </>
      ) : (
        <>
          <TextField
            label="Enter OTP"
            variant="outlined"
            fullWidth
            margin="normal"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            error={!!error}
            helperText={error}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                bgcolor: "#f9f9f9",
                "& fieldset": {
                  borderColor: "#ccc",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  borderWidth: "2px",
                },
              },
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 2,
              py: 1,
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              borderRadius: "8px",
            }}
            onClick={handleOtpSubmit}
          >
            Verify OTP
          </Button>
        </>
      )}

      {successMessage && (
        <Typography
          color="success.main"
          variant="body2"
          sx={{
            mt: 2,
            bgcolor: "#e8f5e9",
            px: 2,
            py: 1,
            borderRadius: "6px",
          }}
        >
          {successMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ForgotPassword;