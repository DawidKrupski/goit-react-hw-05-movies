import React, { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { getPopularMovies } from 'components/App';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const handleGetMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data.results);
    };
    handleGetMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
