import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';

function AddLocation() {
  // State to hold form data
  const [locationData, setLocationData] = useState({
    city: '',
    street: '',
    address1: '',
    address2: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Post location data to backend API
    axios.post('http://localhost:3001/api/locations', locationData)
      .then((response) => {
        console.log('Location added:', response.data);
        // Optionally, perform any additional actions after successful submission
      })
      .catch((error) => {
        console.error('Error adding location:', error);
      });
  };

  return (
    <div>
      <ResponsiveAppBar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" name="city" value={locationData.city} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="street" className="form-label">Street</label>
                <input type="text" className="form-control" id="street" name="street" value={locationData.street} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="address1" className="form-label">Address Line 1</label>
                <input type="text" className="form-control" id="address1" name="address1" value={locationData.address1} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="address2" className="form-label">Address Line 2</label>
                <input type="text" className="form-control" id="address2" name="address2" value={locationData.address2} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary">Add New Location</button>
              <button className="btn btn-primary"> <Link to="/signup">Back to Signup </Link></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLocation;
