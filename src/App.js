import './App.css';
import React, { useEffect,useState } from 'react';

const App = () => {

  const APP_ID = '642a9d8a';
  const API_KEY = "8910b1b2edd7ae5fd6d04d5f18c8175f";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`;
  
  const [counter,setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run')
  });
  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button 
          className="search-button" 
          type="submit"
        >
          Seacrch
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  )
}

export default App;
