import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = ({ ApiKey }) => {
  const [movies, setMovies] = useState('');

  const handleGetMovies = useCallback(async () => {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${ApiKey}`;
    const response = await axios.get(url);
    const data = response.data.results;
    setMovies(data);
    console.log(data);
  });

  useEffect(() => {
    handleGetMovies();
  }, [handleGetMovies]);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};
