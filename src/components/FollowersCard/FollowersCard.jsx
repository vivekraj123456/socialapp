import React, { useState } from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  // Create a state to track whether the user is following someone
  const [followStatus, setFollowStatus] = useState(
    Followers.reduce((acc, follower) => {
      acc[follower.username] = false; // Initially, no one is followed
      return acc;
    }, {})
  );

  const handleFollow = (username) => {
    // Toggle the follow status of the user
    setFollowStatus(prevState => ({
      ...prevState,
      [username]: !prevState[username]
    }));
  };

  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <div>
              <img src={follower.img} alt="" className='followerImage' />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button
              className={`button fc-button ${followStatus[follower.username] ? 'followed' : ''}`}
              onClick={() => handleFollow(follower.username)}
            >
              {followStatus[follower.username] ? 'Unfollow' : 'Follow'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowersCard
