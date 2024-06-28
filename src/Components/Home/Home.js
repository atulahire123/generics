import React, { useState, useEffect, useCallback } from 'react';
import './Home.css';

const firebaseUrl = 'https://console.firebase.google.com/project/react-ecommerce-1e874/database/react-ecommerce-1e874-default-rtdb/data/~2F/movies.json'; // Replace YOUR_PROJECT_ID with your actual project ID

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch movies from Firebase
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(firebaseUrl);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // Add new movie to Firebase
  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch(firebaseUrl, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to add movie.');
      }
      fetchMoviesHandler(); // Refresh movie list
    } catch (error) {
      setError(error.message);
    }
  };

  // Delete movie from Firebase
  const deleteMovieHandler = async (movieId) => {
    try {
      const response = await fetch(`https://console.firebase.google.com/project/react-ecommerce-1e874/database/react-ecommerce-1e874-default-rtdb/data/~2F/movies/${movieId}.json`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete movie.');
      }
      fetchMoviesHandler(); // Refresh movie list
    } catch (error) {
      setError(error.message);
    }
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.openingText}</p>
            <p>{movie.releaseDate}</p>
            <button onClick={() => deleteMovieHandler(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className="home">
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </div>
  );
};

export default Home;
