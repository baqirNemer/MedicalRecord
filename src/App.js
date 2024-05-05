import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import AddLocation from './pages/AddLocation';
import Profile from './pages/Profile';
import Hospitals from './pages/Hospitals';
import HospitalDetails from './pages/HospitalDetails';
import ContactUs from './pages/ContactUs';
import TodaysFactPage from './pages/components/TodaysFactPage';
import BookAppointment from './pages/BookAppointment';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signuppage" element={<SignUpPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addlocation" element={<AddLocation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hospital_details/:id" element={<HospitalDetails />} /> 
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/todays-fact" element={<TodaysFactPage/>} />
          <Route path="/bookappointment/:id" element={<BookAppointment />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
