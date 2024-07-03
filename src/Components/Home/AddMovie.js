import React, { useRef, useState } from 'react';
import './AddMovie.css';

const AddMovie = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    try {
      await props.onAddMovie(movie);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="control">
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className="control">
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className="control">
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button type="submit">Add Movie</button>
      {isLoading && <p className="loading-message">Adding Movie...</p>}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default AddMovie;
