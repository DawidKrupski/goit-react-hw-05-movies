import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getMovieSearch } from 'components/App';
import css from './Movie.module.css';

const Movies = () => {
  const location = useLocation();
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearchMovies = async () => {
    const data = await getMovieSearch(query);
    setSearchMovies(data);
  };

  const handleInputChange = event => {
    setQuery(event.target.value);
    if (event.type === 'keydown' && event.keyCode === 13) {
      handleSearchMovies();
    }
  };

  const handleButtonClick = () => {
    handleSearchMovies();
  };

  return (
    <div>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
      />
      <button onClick={handleButtonClick}>Search</button>
      <ul>
        {searchMovies.map(movie => (
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
            key={nanoid()}
          >
            <li key={nanoid()}>
              <h3>{movie.title}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
