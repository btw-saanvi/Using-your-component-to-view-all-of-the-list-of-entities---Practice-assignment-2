import React, { useState } from 'react';

const LikeButton = ({ initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`px-3 py-1 rounded-full text-white font-semibold transition-all ${
        liked ? 'bg-red-500' : 'bg-gray-300'
      }`}
    >
      {liked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
