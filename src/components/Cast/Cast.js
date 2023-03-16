import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './Cast.module.css';
import { getMovieCast } from 'components/Api';

const Cast = ({ ApiKey }) => {
  const { moviesId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const handleGetCast = async () => {
      const data = await getMovieCast(moviesId);
      setMovieCast(data);
    };
    handleGetCast();
  }, [moviesId, ApiKey]);

  return (
    <ul>
      {movieCast.map(cast => (
        <li className={css.cast} key={nanoid()}>
          {cast.profile_path ? (
            <img
              className={css.castImg}
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={`${cast.name} profile`}
            />
          ) : (
            <img
              className={css.castImg}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1000px-No-Image-Placeholder.svg.png"
              alt="Default profile"
            />
          )}
          <ul className={css.castName}>
            <li> {cast.name} </li>
            <p>Character: {cast.character}</p>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
