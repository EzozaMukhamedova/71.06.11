import React, { useEffect, useState } from "react";
import { getHomePosts } from "../../service/postService";
import { API_BASE_URL } from "../../config/envVariables";
import Sidebar from "../../components/Sidebar";
import UserRecommendations from "../../components/UserRecommendations";
import { FaHeart, FaComment } from "react-icons/fa";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getHomePosts();
      setPosts(data);
    })();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex">
        <div className="flex-1 overflow-auto p-4">
          <div className="flex flex-col items-center">
            {posts.map((post) => (
              <div
                className="bg-white border border-gray-300 rounded-lg overflow-hidden  mb-4 w-full max-w-sm"
                key={post.id}
              >
                <div className="px-4 py-2 flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={post.mediaUrl}
                    alt="User avatar"
                  />
                  <div className="flex-1">
                    <h2 className="font-bold">Username</h2>
                    <p className="text-sm text-gray-500">1h ago</p>
                  </div>
                </div>
                <img
                  className="w-full"
                  src={API_BASE_URL + post.mediaUrl}
                  alt="Post media"
                />
                <div className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="text-gray-700">
                      <FaHeart className="mr-2 bg-red cursor-pointer" />
                    </button>
                    <button className="text-gray-700">
                      <FaComment className="mr-2 cursor-pointer" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-800 mt-2">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <UserRecommendations />
      </div>
    </div>
  );
}
