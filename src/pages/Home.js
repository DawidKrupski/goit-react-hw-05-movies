import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = ({ ApiKey }) => {
  const [movies, setMovies] = useState([]);

  const handleGetMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${ApiKey}`;
    const response = await axios.get(url);
    const data = response.data.results;
    setMovies(data);
    console.log(data);
  };

  useEffect(() => {
    handleGetMovies();
    return () => {
      setMovies([]);
    };
  }, [ApiKey]);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};
