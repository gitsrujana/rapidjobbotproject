import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Assuming token is passed as a query parameter
  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Password validation
    if (!password || password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/jobseekers/reset-password",
        { password, token }
      );
      setSuccessMessage(response.data.message);
      setTimeout(() => {
        navigate("/login"); // Redirect to login page after password reset
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Error resetting password");
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
        Reset Password
      </Typography>
      <TextField
        label="New Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
      <TextField
        label="Confirm Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
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
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
        onClick={handleSubmit}
      >
        Reset Password
      </Button>
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
            fontWeight: "bold",
          }}
        >
          {successMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ResetPassword;