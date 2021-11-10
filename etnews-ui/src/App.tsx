import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Post, { PostObject } from './components/Post';

function App() {
  const [post, setPost] = useState<PostObject | undefined>({
    title: 'Título maneiro',
    content: `Lorem ipsum dolor sit amet`
  })


  return (
    <div className="App">
      <header className="App-header">
        {
          !!post &&
          <Card align="center" title={"Card"}>
            <Post post={post} totalComments={21} />
          </Card>
        }
        <button onClick={() => setPost(undefined)}>
          Remover Post
        </button>
      </header>
    </div>
  );
}

export default App;
