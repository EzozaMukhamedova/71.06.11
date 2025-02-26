import React, { useEffect, useState } from "react";
import { getHomePosts } from "../../service/postService";
import { API_BASE_URL } from "../../config/envVariables";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getHomePosts();
      setPosts(data);
    })();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="text-center text-2xl font-bold py-4">HOME</h1>
      <div className="flex flex-col items-center">
        {posts.map((post) => (
          <div
            className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg mb-4 w-full max-w-sm"
            key={post.id}
          >
            <img
              className="w-full"
              src={API_BASE_URL + post.mediaUrl}
              alt="Post media"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
