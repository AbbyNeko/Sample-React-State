import './App.css';
import {useState} from 'react';

function App() {

  const [favMovie, setFavMovie] = useState('');

  return (
    <div className="App">
      <h1>What is your Favorite Movie?</h1>
      <form>
        <input type="text" onChange={(e) => setFavMovie(e.target.value)}/>
      </form>

      <p>Favorite Movie is ... <span>{favMovie}</span></p>
    </div>
  );
}

export default App;
