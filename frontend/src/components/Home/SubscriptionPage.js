import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Paper,
  Divider,
  Card,
} from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";

import { Link } from "react-router-dom";
import axios from "axios";
import { assets } from "../../assets/assets";

function SubscriptionPage() {
 
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",                                            
    expiryDate: "",
    cvc: "",
    cardholderName: "",
    address: "",
    saveInfo: false,
    isBusiness: false,
    country:""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubscription = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/payments/register",
        formData
      );
      console.log("Response:", response.data);
      alert("Subscription successful!");
    } catch (error) {
      console.error("Error during subscription:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Box sx={{ p: 5, backgroundColor: "#f5f5f5", minHeight: "100vh", mt: 10 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <img
              src={assets.logo}
              alt="RapidJobsBot Logo"
              style={{ height: "80px", marginLeft: "-200px" }}
            />
          </Box>

          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ mt: "30px" }}
          >
            Subscribe to RapidJobsBot Basic - Yearly
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold", mt: 3, marginLeft: "-250px" }}
          >
            US$5.00
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            gutterBottom
            sx={{ marginLeft: "-80px", mt: "-30px" }}
          >
            Per year
          </Typography>
          <Box>
            <Typography
              variant="body2"
              sx={{
                mb: 1,
                mt: 5,
                marginLeft: "180px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              RapidJobsBot Basic - yearly
              <span>US$5.00</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "180px",
              }}
            >
              <span>Billed Annually</span>
            </Typography>
          </Box>
          <Divider sx={{ my: 2, width: "70%", marginLeft: "180px" }} />
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "180px",
            }}
          >
            <span>Subtotal</span>
            <span>US$5.00</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
              marginLeft: "180px",
            }}
          >
            <span>Tax</span>
            <span>Enter address to calculate</span>
          </Typography>
          <Divider sx={{ my: 2, width: "70%", marginLeft: "180px" }} />
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              marginLeft: "180px",
            }}
          >
            <span>Total Due Today</span>
            <span>US$5.00</span>
          </Typography>
        </Grid>

        <Grid item xs={12} md={7}>
          <Card sx={{ p: 4, marginLeft: "30px", mt: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Pay with card
            </Typography>
            <form onSubmit={handleSubscription}>
              <TextField
                label="Email"
                type="email"
                name="email"
                fullWidth
                required
                margin="normal"
                value={formData.email}
                onChange={handleChange}
              />
              <Typography variant="body2" sx={{ mt: 1, mb: -1 }}>
                Card information
              </Typography>

              <TextField
                type="text"
                name="cardNumber"
                fullWidth
                required
                margin="normal"
                placeholder="1234 1234 1234 1234"
                value={formData.cardNumber}
                onChange={handleChange}
              />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="MM/YY"
                    type="text"
                    name="expiryDate"
                    fullWidth
                    required
                    margin="normal"
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="CVC"
                    type="text"
                    name="cvc"
                    fullWidth
                    required
                    margin="normal"
                    value={formData.cvc}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Typography variant="body2" sx={{ mt: 2, mb: -1 }}>
                Cardholder name
              </Typography>
              <TextField
                type="text"
                name="cardholderName"
                fullWidth
                required
                margin="normal"
                placeholder="full name on card"
                value={formData.cardholderName}
                onChange={handleChange}
              />
              <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
                Billing Address
              </Typography>
       
              <TextField
                
                type="text"
                name="country"
                fullWidth
                required
                margin="normal"
            
                value={formData.country}
                onChange={handleChange}
                
              />
              
              <TextField
                label="Address"
                type="text"
                name="address"
                fullWidth
                required
                margin="normal"
                value={formData.address}
                onChange={handleChange}
              />
              <Typography sx={{ textDecoration: "underline" }}>
                Enter address manually
              </Typography>
              <Card sx={{ padding: 2, mt: 3 }}>
                <FormControlLabel
                  sx={{ marginLeft: "-15px", fontWeight: "bold", mt: "-6px" }}
                  control={
                    <Checkbox
                      checked={formData.saveInfo}
                      name="saveInfo"
                      onChange={handleChange}
                    />
                  }
                  label="Securely save my information for 1-click checkout"
                />
                <Typography sx={{ marginLeft: "5px", fontSize: "small" }}>
                  Pay faster on Rapidjobsbot and everywhere link is accepted.
                </Typography>
              </Card>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.isBusiness}
                    name="isBusiness"
                    onChange={handleChange}
                  />
                }
                label="I'm purchasing as a business"
                sx={{ marginLeft: "-10px", mt: "20px" }}
              />
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="white"
                  sx={{
                    mt: 3,
                    backgroundColor: "#0E5263",
                    marginLeft: "200px",
                    width: "300px",
                  }}
                >
                  Subscribe
                </Button>
              </Grid>
              <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                By clicking Subscribe, you agree to{" "}
                <Link
                  href="#"
                  underline="hover"
                  sx={{ textDecoration: "underline" }}
                >
                  RapidJobsBot Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  underline="hover"
                  sx={{ textDecoration: "underline" }}
                >
                  Privacy Policy
                </Link>{" "}
                , and allow them to charge your future payments in accordance
                with their terms. You can always cancel your subscription.
              </Typography>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SubscriptionPage;
