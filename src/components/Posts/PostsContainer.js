import React, { lazy, Suspense } from 'react'
import PostSkeleton from './PostSkeleton';
const Posts = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('../Posts/Posts')),3000);
  })
})

const PostsContainer = () => {
  return (
    <Suspense
      fallback={
        <>
          <PostSkeleton/>
          <PostSkeleton/>
          <PostSkeleton/>
          <PostSkeleton/>
          <PostSkeleton/>
          <PostSkeleton/>
        </>
      }
    >
      <Posts/>
    </Suspense>
  )
}

export default PostsContainer