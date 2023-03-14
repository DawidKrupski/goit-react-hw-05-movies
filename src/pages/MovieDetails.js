import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

export const MovieDetails = ({ ApiKey }) => {
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
      <Link to={backLink}>&#8592; Go back</Link>;
      {movieDetails ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt=""
          ></img>
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
          <ul>
            Additional information
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
