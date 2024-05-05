import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from './Navbar';

const TodaysFactPage = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (response.ok) {
          const data = await response.json();
          setFact(data.value);
        } else {
          console.error('Failed to fetch today\'s fact');
        }
      } catch (error) {
        console.error('Error fetching today\'s fact:', error);
      } finally {
       
      }
    };

    fetchFact();
  }, []); 
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Today's Chuck Norris Joke</h1>
      <p>{fact}</p>
      
    </div>
  );
};

export default TodaysFactPage;
