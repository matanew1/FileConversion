import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <video id="background-video" loop autoPlay muted playsInline>
        <source src="/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container className="content-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Container>
  );
}

export default App;
