import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import AddLocation from './pages/AddLocation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/addlocation" element={<AddLocation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
