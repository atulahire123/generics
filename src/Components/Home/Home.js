import React, { useState, useEffect } from 'react';
import { ref, set, push, onValue, remove } from 'firebase/database';
import { database } from './firebase'; // Make sure to adjust the path to your firebase.js
import './Home.css';

const Home = () => {
  const [tourDates, setTourDates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({
    title: '',
    openingText: '',
    releaseDate: '',
  });

  // Fetch movies from Firebase on component mount
  useEffect(() => {
    setIsLoading(true);
    const moviesRef = ref(database, 'movies/');
    onValue(moviesRef, (snapshot) => {
      const data = snapshot.val();
      const moviesList = [];
      for (const key in data) {
        moviesList.push({ id: key, ...data[key] });
      }
      setTourDates(moviesList);
      setIsLoading(false);
    });
  }, []);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  // Handle form submission to add a new movie
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newMovieRef = push(ref(database, 'movies/'));
      await set(newMovieRef, {
        title: movie.title,
        opening_crawl: movie.openingText,
        release_date: movie.releaseDate,
      });
      setMovie({
        title: '',
        openingText: '',
        releaseDate: '',
      });
      // Manually update UI after adding a new movie
      setTourDates((prevTourDates) => [
        ...prevTourDates,
        {
          id: newMovieRef.key,
          title: movie.title,
          opening_crawl: movie.openingText,
          release_date: movie.releaseDate,
        },
      ]);
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  // Handle delete movie
  const handleDeleteMovie = async (id) => {
    try {
      const movieRef = ref(database, `movies/${id}`);
      await remove(movieRef);
      // Update the UI to remove the deleted movie
      setTourDates((prevTourDates) =>
        prevTourDates.filter((tour) => tour.id !== id)
      );
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to The Generics</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="openingText">Opening Text</label>
          <textarea
            id="openingText"
            name="openingText"
            value={movie.openingText}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={handleInputChange}
          />
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
          {tourDates.map((tour) => (
            <div key={tour.id} className="tour-date">
              <p><strong>Title:</strong> {tour.title}</p>
              <p><strong>Opening Text:</strong> {tour.opening_crawl}</p>
              <p><strong>Release Date:</strong> {tour.release_date}</p>
              <button onClick={() => handleDeleteMovie(tour.id)}>DELETE</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
