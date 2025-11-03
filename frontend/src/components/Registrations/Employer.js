import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from "axios";
const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [filePath, setFilePath] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setFilePath(e.target.files[0].name);
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert('No file selected!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully!');
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file.');
    }
  };

  return (
    <Box sx={{marginTop:"10%"}}>
      <Typography variant="h6" gutterBottom>
        Upload File
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <Button
          variant="outlined"
          component="label"
          startIcon={<CloudUploadIcon />}
        >
          Select File
          <input
            type="file"
            hidden
            accept=".jpg,.png,.pdf,.docx,.xlsx"
            onChange={handleFileChange}
          />
        </Button>
        {filePath && (
          <Typography variant="body2" color="textSecondary">
            Selected File: {filePath}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleFileUpload}
          disabled={!file}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
};

export default FileUpload;