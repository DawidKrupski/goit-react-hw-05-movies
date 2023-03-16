import axios from 'axios';

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
