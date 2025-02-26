import React from "react";

const InstagramPost = ({ post }) => {
  return (
    <div className="max-w-md w-full rounded-lg overflow-hidden shadow-lg bg-white mb-4">
      <div className="px-4 py-2">
        <div className="flex items-center space-x-3">
          <img
            className="w-8 h-8 rounded-full"
            src="/path/to/user/avatar.jpg"
            alt="User avatar"
          />
          <div className="font-semibold text-sm">
            {post.userName || "Username"}
          </div>
          <div className="text-xs text-gray-500 ml-auto">
            {post.timeAgo || "1h"}
          </div>
        </div>
      </div>

      <img
        className="w-full"
        src={API_BASE_URL + post.mediaUrl}
        alt="Post content"
      />

      <div className="px-4 py-2">
        <div className="flex space-x-4">
          <button className="text-gray-700">
            <i className="far fa-heart"></i>
          </button>
          <button className="text-gray-700">
            <i className="far fa-comment"></i>
          </button>
        </div>
        <p className="text-sm text-gray-800 mt-2">{post.description}</p>
      </div>
    </div>
  );
};

export default InstagramPost;
