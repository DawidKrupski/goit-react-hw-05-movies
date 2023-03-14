import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Menu } from './Menu/Menu';
import { Movies } from 'pages/Movies';
import { lazy, Suspense } from 'react';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  const ApiKey = '0642b3e039f9cde93a3a88c569e802eb';

  return (
    <div>
      <nav>
        <Menu to="/" end></Menu>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="goit-react-hw-05-movies/"
            element={<Home ApiKey={ApiKey} />}
          />
          <Route path="/" element={<Home ApiKey={ApiKey} />} />
          <Route path="/movies" element={<Movies ApiKey={ApiKey} />}></Route>
          <Route
            path="/movies/:moviesId"
            element={<MovieDetails ApiKey={ApiKey} />}
          >
            <Route path="cast" element={<Cast ApiKey={ApiKey} />} />
            <Route path="reviews" element={<Reviews ApiKey={ApiKey} />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
