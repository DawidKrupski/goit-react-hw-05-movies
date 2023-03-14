import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Cast = ({ ApiKey }) => {
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
  }, [moviesId, ApiKey]);

  return (
    <ul>
      {movieCast.map(cast => (
        <li key={nanoid()}>
          {cast.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={`${cast.name} profile`}
            />
          ) : (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/500px-No-Image-Placeholder.svg.png"
              alt="Default profile"
            />
          )}
          {cast.name}
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
