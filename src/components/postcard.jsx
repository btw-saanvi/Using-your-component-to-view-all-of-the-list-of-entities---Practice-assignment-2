import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white flex items-center space-x-4">
      <img
        src={post.profileImage} // Updated to match your post data
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="font-bold text-lg">{post.username}</h3>
        <p className="text-gray-700">{post.content}</p>
      </div>
      <LikeButton initialLiked={post.isLiked} />
    </div>
  );
};

export default PostCard;
