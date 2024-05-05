import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImgMediaCard from './Card';
import axios from 'axios';
import ContainedButtons from './Button';

export default function CardController() {
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        fetchHospitals();
    }, []);

    const fetchHospitals = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/hospitals');
            setHospitals(response.data);
        } catch (error) {
            console.error('Error fetching hospitals:', error);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}> {/* Center align the content */}
            <div className="card-container">
                {hospitals.slice(0, 3).map((hospital, index) => (
                    <ImgMediaCard
                        key={index}
                        imageSrc={hospital.image}
                        title={hospital.name}
                        description={hospital.description}
                        shareDestination={hospital.shareDestination}
                        learnMoreDestination={hospital.learnMoreDestination}
                    />
                ))}
            </div>
            <br/>
            <Link to="/hospitals">
                <ContainedButtons text="View All" />
            </Link>
        </div>
    );
}
