import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import axios from 'axios';

const Content = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const cards = [
    {
      title: 'Login',
      content: ['Login'],
    },
    {
      title: 'Register',
      content: ['Register'],
    },
    {
      title: 'Dashboard',
      content: ['Dashboard'],
    },
    {
      title: 'Profile',
      content: ['Profile'],
    },
    {
      title: 'Acceptable File Format',
      content: ['RAR', 'ZIP'],
    },
  ];

  const handleFileChange = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = (event) => {
    event.preventDefault();
    const body = {
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.name.split('.').pop(),
    }
    axios.post('http://localhost:8080/upload', body, {
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {
      const data = response.data;
      setSelectedFile(data);
    }).catch((error) => {
      console.log(error);
    })
  };

  const downloadFile = (event) => {
    event.preventDefault();
    if (selectedFile.type === 'rar') {
      console.log(selectedFile._id)
      axios.get(`http://localhost:8080/download?_id=${selectedFile._id}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }

  }

  return (
    <div className="container">
      <form onSubmit={uploadFile}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      <form onSubmit={downloadFile}>
        <button type="submit">Download as rar</button>
      </form>
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <h1>{card.title}</h1>
          <br />
          {card.content.length > 1 ? (
            <ul>
              {card.content.map((item, index) => (
                <li key={index}>
                  <label>{item}</label>
                </li>
              ))}
            </ul>
          ) : (
            <nav>
              <ul>
                <li>
                  <Link to={`/${card.content[0].toLowerCase()}`}>
                    {card.content[0]}
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      ))}
    </div>
  );
};

export default Content;
