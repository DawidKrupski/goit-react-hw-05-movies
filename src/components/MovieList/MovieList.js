import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <div>Tranding today</div>
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
                  <h2>{movie.title}</h2>
                </li>
              ) : null}
            </Link>
          ))}
      </ul>
    </>
  );
};
