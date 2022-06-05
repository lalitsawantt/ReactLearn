import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react';
import PostsSkeleton from './components/PostsSkeleton';
// import Posts from './components/Posts';
const Posts = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('../src/components/Posts')), 3000);
  })
})

function App() {
  return (
    <Suspense fallback={<>
      <PostsSkeleton/>
      <PostsSkeleton/>
      <PostsSkeleton/>
      <PostsSkeleton/>
      <PostsSkeleton/>
      <PostsSkeleton/>
      <PostsSkeleton/>
    </>}>
      <Posts/>
    </Suspense>

  );
}

export default App;
