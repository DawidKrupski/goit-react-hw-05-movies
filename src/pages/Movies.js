import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Movies = ({ ApiKey }) => {
  const location = useLocation();
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleSearchMovies = async () => {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
      const response = await axios.get(url);
      const data = response.data.results;
      setSearchMovies(data);
      console.log(data);
    };
    handleSearchMovies();
  }, [ApiKey, query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <ul>
        {searchMovies.map(movie => (
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location, searchMovies },
            }}
            key={movie.id}
          >
            <li key={movie.id}>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
