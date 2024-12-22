import React, { useState } from "react";

const CreatePost = ({ captionId }) => {
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [error, setError] = useState("");

  const handleCreatePost = async () => {
    setIsCreatingPost(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8000/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ caption_id: captionId }),
      });

      if (!response.ok) throw new Error("Failed to create post");

      const data = await response.json();
      setPostContent(data.postContent);
    } catch (err) {
      setError("Failed to create post. Please try again.");
    } finally {
      setIsCreatingPost(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleCreatePost}
        disabled={isCreatingPost}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        {isCreatingPost ? "Creating Post..." : "Create Post"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {postContent && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold">Generated Post</h3>
          <p>{postContent}</p>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
