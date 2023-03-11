import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from '../pages/Movies';

export const App = () => {
  const ApiKey = '0642b3e039f9cde93a3a88c569e802eb';

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Movies />} />
        <Route
          path="/goit-react-hw-05-movies/:moviesId"
          element={<MovieDetails ApiKey={ApiKey} />}
        />
      </Routes>
    </div>
  );
};
