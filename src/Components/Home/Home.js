import React, { useState, useCallback } from 'react';
import AddMovie from './AddMovie';
import Movie from './Movie';
import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-ecommerce-1e874-default-rtdb.firebaseio.com/movies.json');
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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  const addMovieHandler = async (movie) => {
    try {
      const response = await fetch('https://react-ecommerce-1e874-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to add movie.');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = (
      <ul className="movies-list">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            openingText={movie.openingText}
            releaseDate={movie.releaseDate}
          />
        ))}
      </ul>
    );
  }

  if (error) {
    content = <p className="error-message">{error}</p>;
  }

  if (isLoading) {
    content = <p className="loading-message">Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section className="fetch-movies-container">
        <button className="fetch-movies-button" onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default Home;
