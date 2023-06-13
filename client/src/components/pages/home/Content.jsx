import React, { useState } from 'react';
import { Button, Typography, List, ListItem, ListItemText, Paper, Container, Grid, TextField } from '@mui/material';
import { CloudUpload, GetApp } from '@mui/icons-material';
import axios from 'axios';

const Content = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLink, setSelectedLink] = useState('');

  const downloadFile = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/download?_id=${selectedFile._id}`);
      if (response.status === 200) {
        const fileName = response.data;
        window.location.href = `http://localhost:8080/download/${fileName}`;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', event.target.files[0]);

    if (event.target.files.length > 0)
      axios
        .post('http://localhost:8080/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
          setSelectedFile(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const handleLinkChange = (event) => {
    event.preventDefault();
    setSelectedLink(event.target.value)
  };

  const downloadMP3 = (event) => {
    event.preventDefault();
    console.log(selectedLink);
  };

  const cards = [
    {
      title: 'CONVERT RAR TO ZIP',
      content: (
        <Typography>
          <label>
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <Button variant="contained" component="span" startIcon={<CloudUpload />}>
              Upload RAR File
            </Button>
          </label>
        </Typography>
      ),
      download:
        selectedFile !== null ? (
          <Button
            variant="contained"
            name={selectedFile.mimetype === 'application/zip' ? 'rar' : 'zip'}
            onClick={downloadFile}
            startIcon={<GetApp />}
          >
            Download As {selectedFile.mimetype === 'application/zip' ? 'RAR' : 'ZIP'}
          </Button>
        ) : null,
    },
    {
      title: 'CONVERT YOUTUBE LINK TO MP3',
      content: (
            <Grid container spacing={3}>
              <Grid item>
                <TextField label="Youtube Link" sx={{ backgroundColor: "white"}} value={selectedLink}
                  onChange={handleLinkChange}
                />
              </Grid>
              <Grid item>
                <Button onClick={downloadMP3} variant="contained" component="span" startIcon={<CloudUpload />}>
                  Download as mp3
                </Button>
              </Grid>
            </Grid>
      ),
      download:
        selectedFile !== null ? (
          <Button
            variant="contained"
            name={selectedFile.mimetype === 'application/zip' ? 'rar' : 'zip'}
            onClick={downloadFile}
            startIcon={<GetApp />}
          >
            Download As {selectedFile.mimetype === 'application/zip' ? 'RAR' : 'ZIP'}
          </Button>
        ) : null,
    },
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={12} key={index}>
            <Paper elevation={3} sx={{ background: 'transparent', color: 'white', padding: '2rem' }}>
              <Typography variant="h5">{card.title}</Typography>
              <br />
              <Grid item>
                {Array.isArray(card.content) ? (
                  <List>
                    {card.content.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Grid item style={{ display: 'flex', justifyContent: "space-between", alignItems:"center" }} >
                    {card.content}
                    <br />
                    {card.download}
                  </Grid>
                )}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Content;
