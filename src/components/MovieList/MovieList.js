import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <div>Tranding today</div>
      <ul>
        {movies &&
          movies.map(movie => (
            <Link to={`${movie.id}`} state={{ from: location }} key={movie.id}>
              <li>
                <div>
                  <h2>
                    {movie.title} {movie.id}
                  </h2>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};
