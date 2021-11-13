import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [names, setNames] = useState([
    'Emanuel', 'Joyce', 'Samuel', 'Emanuel Jr', 'Arthur'
  ])

  useEffect(() => {
    console.log('Componente montado')

    return() => {
      console.log('Componente desmontado')
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>
        <button
          onClick={() => {
            setNames([...names, 'José'])
          }}
        >
          Event
        </button>
      </header>
    </div>
  );
}

export default App;
