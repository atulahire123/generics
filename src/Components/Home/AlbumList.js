import React, { useEffect, useState, useRef } from 'react';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [retry, setRetry] = useState(true);
  const retryIntervalRef = useRef(null);

  const fetchAlbums = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://swapi.dve/api/films'); // Replace with your API URL
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAlbums(data);
      setIsLoading(false);
      setRetry(false); // Stop retrying if the request is successful
    } catch (error) {
      setIsLoading(false);
      setError('Something went wrong ... Retrying');
      setRetry(true);
    }
  };

  useEffect(() => {
    if (retry) {
      fetchAlbums();

      // Set the retry interval
      retryIntervalRef.current = setInterval(() => {
        fetchAlbums();
      }, 5000);

      // Clean up the interval on component unmount or when retry stops
      return () => clearInterval(retryIntervalRef.current);
    }
  }, [retry]);

  const handleCancelRetry = () => {
    clearInterval(retryIntervalRef.current);
    setRetry(false);
    setError('Retrying canceled by the user');
  };

  return (
    <div>
      <h1>Album List</h1>
      {isLoading && <p>Loading...</p>}
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={handleCancelRetry}>Cancel Retry</button>
        </div>
      )}
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
