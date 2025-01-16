import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import './PostSide.css';

const PostSide = () => {
  // Simulate fetching posts from a database or API
  const fetchPosts = () => {
    return [
      {
        img: "https://via.placeholder.com/150",
        desc: "A post shared by someone",
        likes: 5,
        name: "John Doe",
        liked: false,
      },
      {
        img: "https://via.placeholder.com/150",
        desc: "Another post by a different user",
        likes: 12,
        name: "Jane Smith",
        liked: true,
      },
    ];
  };

  const [posts, setPosts] = useState([]);

  // Fetch posts when the component mounts (simulating an API call)
  useEffect(() => {
    const initialPosts = fetchPosts();
    setPosts(initialPosts);
  }, []);

  // Function to handle new post share
  const handleNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Add new post to the top
  };

  return (
    <div className="PostSide">
      <PostShare onNewPost={handleNewPost} /> {/* Pass function to PostShare */}
      <Posts posts={posts} /> {/* Pass posts to Posts component */}
    </div>
  );
};

export default PostSide;
