import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Reviews = ({ ApiKey }) => {
  const { moviesId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const handleGetReviews = async () => {
      const url = `https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=${ApiKey}&language=en-US&page=1`;
      const response = await axios.get(url);
      const data = response.data.results;
      setMovieReviews(data);
    };
    handleGetReviews();
  }, [moviesId, ApiKey]);

  return (
    <ul>
      {movieReviews.length > 0 ? (
        movieReviews.map(reviews => (
          <li key={nanoid()}>
            <h3>Author: {reviews.author}</h3>
            <p>{reviews.content}</p>
          </li>
        ))
      ) : (
        <p>We dont have any reviews for this movie</p>
      )}
    </ul>
  );
};

Reviews.propTypes = {
  ApiKey: PropTypes.string.isRequired,
};

export default Reviews;
