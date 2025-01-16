import React, { useState } from 'react';
import './Posts.css';
import { PostsData } from '../../Data/PostsData'; // Your existing post data
import Post from '../Post/Post'; // Individual Post component
import PostShare from '../PostShare/PostShare'; // Component for sharing posts

const Posts = () => {
  const [posts, setPosts] = useState(PostsData);

  // Function to handle when a new post is shared
  const handleNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Add new post to the top of the list
  };

  // Function to handle like/unlike functionality
  const handleLikeChange = (postId, newLikeStatus, newLikesCount) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, id) =>
        id === postId ? { ...post, liked: newLikeStatus, likes: newLikesCount } : post
      )
    );
  };

  return (
    <div className="Posts">
      {/* Render PostShare component only once */}
      <PostShare onNewPost={handleNewPost} />

      {/* Map through posts and render each one */}
      {posts.map((post, id) => (
        <Post
          key={id}
          data={post}
          id={id}
          onLikeChange={handleLikeChange}
        />
      ))}
    </div>
  );
};

export default Posts;
