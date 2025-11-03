import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Input,
  Stack,
  useMediaQuery,
  Container,
} from "@mui/material";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const App = ({ handleNext, handleBack }) => {
  const mediaViewPort = useMediaQuery("(min-width:600px)");

  const [formData, setFormData] = useState({
    educationType: "",
    university: "",
    fieldOfStudy: "",
    graduationYear: "",
    grade: "",
    additionalDetails: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState({
    postGraduation: null,
    graduation: null,
    underCertification: null,
    ssc: null,
  });

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles({ ...uploadedFiles, [type]: file });
      alert(`File "${file.name}" uploaded for ${type}!`);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/v1/api/educational-details/register",
        formData
      );
      alert(response.data.message);
      handleNext();
    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed");
    }
  };
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          p: 3,
          borderRadius: "8px",
          border: "2px solid white",
          margin: "auto",
          my: 1,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",

          backgroundColor: "#ffff",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  mt: -8,
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Upload Certificates
                </Typography>

                {[
                  { label: "Post Graduation", key: "postGraduation" },
                  { label: "Graduation", key: "graduation" },
                  { label: "Under Certification", key: "underCertification" },
                  { label: "SSC", key: "ssc" },
                ].map((certificate) => (
                  <Stack
                    key={certificate.key}
                    direction="column"
                    spacing={1}
                    alignItems="center"
                    sx={{ mb: 3 }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      {certificate.label}
                    </Typography>
                    <input
                      type="file"
                      id={`file-input-${certificate.key}`}
                      style={{ display: "none" }}
                      onChange={(e) => handleFileChange(e, certificate.key)}
                    />
                    <Button
                      variant="contained"
                      component="label"
                      htmlFor={`file-input-${certificate.key}`}
                      sx={{ textTransform: "none", width: "50%" }}
                    >
                      Upload File
                    </Button>
                    {uploadedFiles[certificate.key] && (
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "green",
                          textAlign: "center",
                        }}
                      >
                        Uploaded: {uploadedFiles[certificate.key]?.name}
                      </Typography>
                    )}
                  </Stack>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ textAlign: "start", fontWeight: "bold", mb: 5 }}
                >
                  Educational Details
                </Typography>

                <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                  Education Type
                </Typography>
                <TextField
                  sx={{ backgroundColor: "whitesmoke" }}
                  name="educationType"
                  value={formData.educationType}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                  University / Institute
                </Typography>
                <TextField
                  sx={{ backgroundColor: "whitesmoke" }}
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                  Field of Study
                </Typography>
                <TextField
                  sx={{ backgroundColor: "whitesmoke" }}
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                  Graduation Year
                </Typography>
                <TextField
                  sx={{ backgroundColor: "whitesmoke" }}
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                  Grade / Percentage / GPA
                </Typography>
                <TextField
                  sx={{ backgroundColor: "whitesmoke" }}
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <Typography sx={{ textAlign: "start", fontWeight: "bold" }}>
                  Additional Details
                </Typography>
                <TextField
                  sx={{ backgroundColor: "whitesmoke" }}
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <Grid
                  item
                  xs={12}
                  container
                  justifyContent="center"
                  spacing={2}
                >
                  <Button
                    sx={{
                      borderRadius: "16px",
                      textTransform: "none",
                      margin: "5%",
                    }}
                    onClick={handleBack}
                    color="secondary"
                  >
                    <ArrowBackIosIcon />
                  </Button>

                  <Button
                    onClick={handleNext}
                    color="primary"
                    sx={{
                      borderRadius: "16px",
                      textTransform: "none",
                      margin: "5%",
                      marginLeft: "45%",
                    }}
                  >
                    skip
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    sx={{
                      border:"1px solid black",
                      borderRadius: "16px",
                 margin:"5%",
                marginLeft:"-5%",
                      textTransform: "none",
                      '&:hover': {
                        backgroundColor: '#0E5263',
                        color:"white"
                      },
                    }}
                  >
                    Next
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default App;
