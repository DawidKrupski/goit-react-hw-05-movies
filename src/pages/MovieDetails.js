import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const MovieDetails = ({ ApiKey }) => {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const handleGetDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/${moviesId}?api_key=${ApiKey}&language=en-US`;
    const response = await axios.get(url);
    const data = response.data;
    setMovieDetails(data);
    console.log(data);
  };

  useEffect(() => {
    handleGetDetails();
  }, []);

  return (
    <div>
      {movieDetails ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          ></img>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
