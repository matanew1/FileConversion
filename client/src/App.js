import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import { Container } from '@mui/material';

function App() {
  return (
    <Container className="app-container">
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
