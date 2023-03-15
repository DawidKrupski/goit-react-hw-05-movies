import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieDetails.module.css';

const MovieDetails = ({ ApiKey }) => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    const handleGetDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${moviesId}?api_key=${ApiKey}&language=en-US`;
      const response = await axios.get(url);
      const data = response.data;
      setMovieDetails(data);
      setMovieGenres(data.genres);
    };
    handleGetDetails();
  }, [ApiKey, moviesId]);

  return (
    <div>
      <Link to={backLink} className={css.backBtn}>
        &#8592; Go back
      </Link>
      ;
      {movieDetails ? (
        <div>
          <div className={css.details}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt=""
            ></img>
            <div className={css.informations}>
              <h2>{movieDetails.title}</h2>
              <p>User Score: {Math.ceil(movieDetails.vote_average * 10)}%</p>
              <div>
                <h3>Overview</h3>
                <p>{movieDetails.overview}</p>
              </div>
              <div>
                <h3>Genres</h3>
                <p>{movieGenres.map(genre => genre.name + ' ')}</p>
              </div>
            </div>
          </div>
          <h3>Additional information</h3>
          <ul className={css.additional}>
            <li>
              <Link to="Cast">Cast</Link>
            </li>
            <li>
              <Link to="Reviews">Reviews</Link>
            </li>
            <Outlet />
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

MovieDetails.propTypes = {
  ApiKey: PropTypes.string.isRequired,
};

export default MovieDetails;
