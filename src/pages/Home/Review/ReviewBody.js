import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ReviewBody = ({ rev }) => {
  const { rating, email, review } = rev;
  const [user, setUser] = useState({});
  let star = [];

  // rating
  if (rating > 0) {
    for (let index = 0; index < rating; index++) {
      star.push('s');
    }
  }

  // Fethcing single user
  useEffect(() => {
    axios
      .get(`https://glacial-caverns-54982.herokuapp.com/singleUser/${email}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);
  return (
    <div className="bg-gray-100 p-5 md:m-5 text-center font-display rounded shadow">
      <h2 className="font-sans font-bold text-xl">{user.displayName}</h2>
      <p className="text-xl">
        {star.map((s, index) => (
          <svg
            key={index}
            className="w-6 h-6 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ))}
      </p>
      <p className="text-gray-700">" {review} "</p>
    </div>
  );
};

export default ReviewBody;
