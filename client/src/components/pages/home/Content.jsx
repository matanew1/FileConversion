import React, { useState } from 'react';
import { Button, Typography, List, ListItem, ListItemText, Paper, Container, Grid } from '@mui/material';
import { CloudUpload, GetApp } from '@mui/icons-material';
import axios from 'axios';

const Content = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const downloadFile = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/download?_id=${selectedFile._id}`); 
      if (response.status === 200) {
        console.log(response.data);
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

  const cards = [
    {
      title: 'UPLOAD FILE',
      content: (
        <Typography>
          <label>
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <Button variant="contained" component="span" startIcon={<CloudUpload />}>
              Upload
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
                  <Grid item justifyContent="center" alignItems="center">
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
