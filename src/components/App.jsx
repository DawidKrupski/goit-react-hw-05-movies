import { Route, Routes } from 'react-router-dom';
import { MovieDetails } from 'pages/MovieDetails';
import { Home } from 'pages/Home';
import { Menu } from './Menu/Menu';
import { Movies } from 'pages/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  const ApiKey = '0642b3e039f9cde93a3a88c569e802eb';

  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <nav>
        <Menu to="/" end></Menu>
      </nav>
      <Routes>
        <Route path="/" element={<Home ApiKey={ApiKey} />} />
        <Route path="/movies" element={<Movies ApiKey={ApiKey} />}></Route>
        <Route
          path="/movies/:moviesId"
          element={<MovieDetails ApiKey={ApiKey} />}
        >
          <Route path="Cast" element={<Cast ApiKey={ApiKey} />} />
          <Route path="Reviews" element={<Reviews ApiKey={ApiKey} />} />
        </Route>
      </Routes>
    </div>
  );
};
