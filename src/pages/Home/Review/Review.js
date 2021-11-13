import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewBody from './ReviewBody';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  // fecth reviews
  useEffect(() => {
    axios
      .get('http://localhost:5000/reviews')
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="container">
        <h2 className="font-display font-semibold text-center text-4xl pt-5">
          Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {reviews.map((rev) => (
            <ReviewBody key={rev._id} rev={rev} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
