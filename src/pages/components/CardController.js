import React, { useState, useEffect } from 'react';
import ImgMediaCard from './Card';
import axios from 'axios';

export default function CardController() {
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        fetchHospitals();
    }, []);

    const fetchHospitals = async () => {
      try {
          const response = await axios.get('http://localhost:3001/api/hospitals'); // Update the URL
          setHospitals(response.data);
      } catch (error) {
          console.error('Error fetching hospitals:', error);
      }
  };
  

    return (
        <div>
            <div className="card-container">
                {hospitals.map((hospital, index) => (
                    <ImgMediaCard
                        key={index}
                        imageSrc={hospital.image}
                        title={hospital.name}
                        description={hospital.description}
                        // Assuming you have share and learn more destinations in your hospital schema
                        shareDestination={hospital.shareDestination}
                        learnMoreDestination={hospital.learnMoreDestination}
                    />
                ))}
            </div>
        </div>
    );
}
