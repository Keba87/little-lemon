import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import BookingPage from './routes/BookingPage';
import HomePage from './routes/HomePage';
import Nav from './components/Nav';
import './App.css';



function App() {
  return (
    <Router>
      <Nav/>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
