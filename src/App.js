import './App.css';
import { Routes, Route, Link } from 'react-router';
import Home from './components/Home';
import Nav from './Nav';
import PostsContainer from './components/Posts/PostsContainer';

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<PostsContainer/>} />
      </Routes>
    </div>
  )
}

export default App;
