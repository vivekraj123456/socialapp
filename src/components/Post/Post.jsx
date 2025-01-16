// Post.jsx
import React, { useState } from 'react';
import './Post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';

const Post = ({ data, onLikeChange, id }) => {
  const [liked, setLiked] = useState(data.liked);
  const [likes, setLikes] = useState(data.likes);

  const handleLike = () => {
    const newLikeStatus = !liked;
    const newLikesCount = newLikeStatus ? likes + 1 : likes - 1;

    // Update local state
    setLiked(newLikeStatus);
    setLikes(newLikesCount);

    // Notify the parent about the like change
    onLikeChange(id, newLikeStatus, newLikesCount); // Passing post id, new like status, and updated likes
  };

  return (
    <div className="Post">
      <img src={data.img} alt="" />

      <div className="postReact">
        {/* When like button is clicked, toggle like status */}
        <img 
          src={liked ? Heart : NotLike} 
          alt="" 
          onClick={handleLike} 
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {likes} likes
      </span>

      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
