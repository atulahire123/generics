import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [tourDates, setTourDates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTourDates = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTourDates(data.results || []);
    } catch (error) {
      console.error('Error fetching tour dates:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to The Generics</h1>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="opening-text">Opening Text</label>
          <textarea id="opening-text" name="opening-text"></textarea>
        </div>
        <div>
          <label htmlFor="release-date">Release Date</label>
          <input type="date" id="release-date" name="release-date" />
        </div>
        <button type="submit">Add Movie</button>
      </form>
      <button className="fetch-movies-button" onClick={fetchTourDates}>
        Fetch Movies
      </button>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="tour-dates">
          {tourDates.map((tour, index) => (
            <div key={index} className="tour-date">
              <p>{tour.title}</p>
              <p>{tour.opening_crawl}</p>
              <p>{tour.release_date}</p>
              <button>VIEW DETAILS</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
