import React, { lazy, useEffect, useState } from 'react'
import { fetchPosts } from '../../Api';
import './Posts.css'

const Posts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data)).catch((err) => console.log(err));
  },[])


  return (
    <div className="posts">
    {
      posts?.map((post) => {
        return(
          <div className="post">
            <div className="title">
              <h3>{post?.title}</h3>
            </div>
            <div className="post-text">
              {post?.body}
            </div>
        </div>
        )
      })
    }
  </div>
  )
}

export default Posts