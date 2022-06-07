import React from 'react'
import './Posts.css';
const PostSkeleton = () => {
  return (
    <div className="skeleton-posts">
      <div className="skeleton-post">
        <div className="skeleton-title">
          <h3></h3>
        </div>
        <div className="skeleton-post-text">
          
        </div>
      </div>
    </div>
  )
}

export default PostSkeleton