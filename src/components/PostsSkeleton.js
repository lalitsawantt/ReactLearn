import React from 'react'
import './Posts.css'
const PostsSkeleton = () => {
  return (
    <div className="skeleton_users">
      <div className="skeleton_user">
        <h4 className="skeleton_name"></h4>
        <h6 className="skeleton_text"></h6>
        <h6 className="skeleton_text"></h6>
      </div>
    </div>
  )
}

export default PostsSkeleton