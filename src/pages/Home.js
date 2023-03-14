import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = ({ ApiKey }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleGetMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`;
      const response = await axios.get(url);
      const data = response.data;
      setMovies(data.results);
    };
    handleGetMovies();
  }, [ApiKey]);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};
