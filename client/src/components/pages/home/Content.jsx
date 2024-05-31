import React, { useState } from "react";
import { Button, Typography, Grid, Paper, Box } from "@mui/material";
import { CloudUpload, GetApp } from "@mui/icons-material";
import axios from "axios";
import creds from "../../../utils/credentials.json";

const FILE_TYPES = {
  RAR: ".rar",
  ZIP: ".zip",
};

const FileUploadButton = ({ onChange, accept }) => (
  <label>
    <input
      type="file"
      accept={accept}
      style={{ display: "none" }}
      onChange={onChange}
    />
    <Button variant="contained" component="span" startIcon={<CloudUpload />}>
      Upload {accept} File
    </Button>
  </label>
);

const DownloadButton = ({ onClick, fileType, to }) => (
  <Button variant="contained" onClick={onClick} startIcon={<GetApp />}>
    Download As {to}
  </Button>
);

const FileCard = ({ title, fileType, to }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const downloadFile = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${creds.baseUrl}/download?_id=${selectedFile._id}`);
  
      if (response.status === 200) {
        const fileName = response.data;
        const [name, type] = fileName.split(".");
        const extension = name.includes(".zip") || name.includes(".rar") ? "" : `.${type}`;
  
        window.location.href = `${creds.baseUrl}/download/${name}${extension}`;
      } else {
        console.error(`Failed to download file: Server responded with status ${response.status}`);
      }
    } catch (error) {
      console.error(`Failed to download file: ${error.message}`);
    }
  };

  const handleFileChange = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    if (event.target.files.length > 0) {
      try {
        const response = await axios.post(`${creds.baseUrl}/upload`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setSelectedFile(response.data);
      } catch (error) {
        console.error(`Failed to upload file: ${error.message}`);
        alert(`Failed to upload file: ${error.message}`);
      }
    }
  };

  return (
    <Grid item xs={12} sm={12}>
      <Paper
        sx={{
          background: "transparent",
          color: "black",
          padding: "2rem",
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <br />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <FileUploadButton onChange={handleFileChange} accept={fileType} />{" "}
            </Box>
          </Grid>
          {selectedFile && (
            <Grid item xs={12} sm={6}>
              <Box mb={2}>
                <DownloadButton
                  onClick={downloadFile}
                  fileType={fileType}
                  to={to}
                />
              </Box>
            </Grid>
          )}
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <Typography variant="h7" color="white">
                &nbsp;&nbsp;&nbsp;{" "}
                {selectedFile ? "File: " + selectedFile.originalname : ""}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const Content = () => {
  const cards = [
    {
      title: "CONVERT RAR TO ZIP",
      fileType: FILE_TYPES.RAR,
      to: FILE_TYPES.ZIP,
    },
    {
      title: "CONVERT ZIP TO RAR",
      fileType: FILE_TYPES.ZIP,
      to: FILE_TYPES.RAR,
    },
  ];

  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <FileCard
          key={card.title}
          title={card.title}
          fileType={card.fileType}
          to={card.to}
        />
      ))}
    </Grid>
  );
};

export default Content;
