import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './Movie.module.css';
import { getMovieSearch } from 'components/Api';

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
    <div className={css.search}>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleInputChange}
      />
      <button className={css.searchBtn} onClick={handleButtonClick}>
        Search
      </button>
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
