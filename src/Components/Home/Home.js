import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [tourDates, setTourDates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTourDates = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://swapi.dve/api/films');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTourDates(data);
    } catch (error) {
      console.error('Error fetching tour dates:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to The Generics</h1>
      <button onClick={fetchTourDates}>Fetch Tour Dates</button>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="tour-dates">
          {tourDates.map((tour, index) => (
            <div key={index} className="tour-date">
              <p>{tour.date}</p>
              <p>{tour.location}</p>
              <p>{tour.venue}</p>
              <button>BUY TICKETS</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
