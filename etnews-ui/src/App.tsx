import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Post from './components/Post';

function App() {
  const [post] = useState({
    title: 'Título maneiro',
    content: `Lorem ipsum dolor sit amet`
  })
  return (
    <div className="App">
      <header className="App-header">
        <Card align="right" title={"Card"}>
          <Post post={post} totalComments={21} />
        </Card>
        <Card align="left" title={"Card"}>
          <Post post={post} totalComments={21} />
        </Card>
      </header>
    </div>
  );
}

export default App;
