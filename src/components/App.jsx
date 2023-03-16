import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Menu } from './Menu/Menu';
import { lazy, Suspense } from 'react';

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movie/Movies'));

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0642b3e039f9cde93a3a88c569e802eb';

export const getPopularMovies = async (page = 1) => {
  const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
  const response = await axios.get(url);
  return response.data;
};

export const getMovieDetails = async moviesId => {
  const url = `${API_URL}movie/${moviesId}?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
};

export const getMovieReviews = async moviesId => {
  const url = `${API_URL}movie/${moviesId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios.get(url);
  return response.data.results;
};

export const getMovieCast = async moviesId => {
  const url = `${API_URL}movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data.cast;
};

export const getMovieSearch = async query => {
  const url = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const response = await axios.get(url);
  return response.data.results;
};

export const App = () => {
  return (
    <div>
      <nav>
        <Menu to="/" end></Menu>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="goit-react-hw-05-movies/"
            element={<Home ApiKey={API_KEY} />}
          />
          <Route path="/" element={<Home ApiKey={API_KEY} />} />
          <Route path="/movies" element={<Movies ApiKey={API_KEY} />}></Route>
          <Route
            path="/movies/:moviesId"
            element={<MovieDetails ApiKey={API_KEY} />}
          >
            <Route path="cast" element={<Cast ApiKey={API_KEY} />} />
            <Route path="reviews" element={<Reviews ApiKey={API_KEY} />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

App.propTypes = {
  ApiKey: PropTypes.string.isRequired,
};
