import React, { useEffect, useState, useCallback, useMemo } from 'react';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [retry, setRetry] = useState(true);

  // Fetching albums using useCallback to memoize the function
  const fetchAlbums = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('https://console.firebase.google.com/project/react-ecommerce-1e874/database/react-ecommerce-1e874-default-rtdb/data/~2F'); // Replace with your API URL
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
  }, []);

  // useEffect to fetch albums on component mount and handle retries
  useEffect(() => {
    fetchAlbums();

    if (retry) {
      const intervalId = setInterval(() => {
        fetchAlbums();
      }, 5000);

      return () => clearInterval(intervalId); // Clean up interval on unmount or retry stop
    }
  }, [fetchAlbums, retry]);

  // Cancel retry function using useCallback
  const handleCancelRetry = useCallback(() => {
    setRetry(false);
    setError('Retrying canceled by the user');
  }, []);

  // Memoized album list to prevent unnecessary re-renders
  const albumList = useMemo(() => {
    return albums.map(album => (
      <li key={album.id}>{album.title}</li>
    ));
  }, [albums]);

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
        {albumList}
      </ul>
    </div>
  );
};

export default AlbumList;
