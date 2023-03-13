import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = ({ ApiKey }) => {
  const { moviesId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const handleGetCast = async () => {
      const url = `https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=${ApiKey}&language=en-US`;
      const response = await axios.get(url);
      const data = response.data.cast;
      setMovieCast(data);
    };
    handleGetCast();
  }, [moviesId, ApiKey, movieCast]);

  return (
    <ul>
      {movieCast.map(cast => (
        <li>
          {/* <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
          ></img> */}
          {cast.name}
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};
