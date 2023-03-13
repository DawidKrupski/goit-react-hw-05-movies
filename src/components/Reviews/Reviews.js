import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = ({ ApiKey }) => {
  const { moviesId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const handleGetReviews = async () => {
      const url = `
      https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=${ApiKey}&language=en-US&page=1`;
      const response = await axios.get(url);
      const data = response.data.results;
      setMovieReviews(data);
    };
    handleGetReviews();
  }, [moviesId, ApiKey, movieReviews]);

  return (
    <ul>
      {movieReviews.map(reviews => (
        <li>
          <h3>Author: {reviews.author}</h3>
          <p>{reviews.content}</p>
        </li>
      ))}
    </ul>
  );
};
