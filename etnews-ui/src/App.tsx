import { useState } from 'react';
import './App.css';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

function App() {
  const [post] = useState({
    title: 'Título maneiro',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  })
  return (
    <div className="App">
      <header className="App-header">
       <Sidebar post={post} />
       <Post post={post} totalComments={21} />
      </header>
    </div>
  );
}

export default App;
