import React, { lazy, Suspense } from 'react'
import UserSkeleton from './UserSkeleton';
const Users = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./Users')), 3000);
  })
})

const Home = () => {
  return (
    <Suspense fallback={<>
      <UserSkeleton/>
      <UserSkeleton/>
      <UserSkeleton/>
      <UserSkeleton/>
      <UserSkeleton/>
      <UserSkeleton/>
      <UserSkeleton/>
    </>}>
      <Users/>
    </Suspense>
  )
}

export default Home