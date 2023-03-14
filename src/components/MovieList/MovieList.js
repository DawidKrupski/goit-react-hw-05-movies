import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <h1>Tranding today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              key={movie.id}
            >
              {movie.title ? (
                <li>
                  <h3>{movie.title}</h3>
                </li>
              ) : null}
            </Link>
          ))}
      </ul>
    </>
  );
};
