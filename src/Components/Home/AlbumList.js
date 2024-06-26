import React, { useState } from 'react';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAlbums = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://swapi.dve/api/films');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAlbums(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Album List</h1>
      <button onClick={fetchAlbums}>Fetch Albums</button>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <ul>
          {albums.map(album => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AlbumList;
