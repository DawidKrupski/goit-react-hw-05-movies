import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/App';

const Reviews = () => {
  const { moviesId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const handleGetReviews = async () => {
      const data = await getMovieReviews(moviesId);
      setMovieReviews(data);
    };
    handleGetReviews();
  }, [moviesId]);

  return (
    <ul>
      {movieReviews.length > 0 ? (
        movieReviews.map(reviews => (
          <li key={reviews.id}>
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

export default Reviews;
