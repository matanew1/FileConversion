import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import axios from 'axios';

const Content = () => {
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
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = (event) => {
    event.preventDefault();
    const body = {
      name: selectedFile.name,
      size: selectedFile.size,
      type: selectedFile.type
    }
    axios.post('http://localhost:8080/upload',body, {
      headers: {'Content-Type':'application/json'}
    }).then((response) => {
      const data = response.data;
      console.log(data);
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className="container">
      <form onSubmit={uploadFile}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
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
