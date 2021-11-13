import './App.css';
import PeopleList from './components/PeopleList';
import useCounter from './hooks/useCounter';

function App() {
  const number = useCounter()
  return (
    <div className="App">
      { number }
      <PeopleList />
      <PeopleList />
    </div>
  );
}

export default App;
