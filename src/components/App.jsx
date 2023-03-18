import { Route, Routes } from 'react-router-dom';
import { Menu } from './Menu/Menu';
import { lazy, Suspense } from 'react';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movie/Movies'));

export const App = () => {
  return (
    <div>
      <nav>
        <Menu to="/" end></Menu>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
