import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import ContainedButtons from './components/Button';

function AddLocation() {
  const [locationData, setLocationData] = useState({
    city: '',
    street: '',
    address1: '',
    address2: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch all existing locations from the backend
      const existingLocationsResponse = await axios.get('http://localhost:3001/api/locations');
      const existingLocations = existingLocationsResponse.data;
  
      // Check if any existing location matches the new location's attributes
      const locationExists = existingLocations.some((location) => {
        return (
          location.city === locationData.city &&
          location.street === locationData.street &&
          location.address1 === locationData.address1 &&
          location.address2 === locationData.address2
        );
      });
  
      if (locationExists) {
        setMessage('Location already exists in the database.');
      } else {
        // Post location data to backend API if location does not exist
        const createResponse = await axios.post('http://localhost:3001/api/locations', locationData);
        console.log('Location added:', createResponse.data);
        setMessage('Location added successfully!');
        // Optionally, reset form fields or perform any additional actions after successful submission
      }
    } catch (error) {
      console.error('Error adding location:', error);
      setMessage('Error adding location. Please try again.');
    }
  };
  
  

  return (
    <div>
      <ResponsiveAppBar />
      <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title mb-4 text-center">Add New Location</h5>
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
              <div className="text-center">
                <ContainedButtons type="submit" text="Add New Location" className="btn btn-primary" />
              </div>
              <div className="text-center mt-3">
                <p>{message}</p>
                <p>Back to <Link to="/signup">Signup</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLocation;
