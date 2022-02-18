import './App.css';
import React from 'react';

const App = () => {

  const APP_ID = '642a9d8a';
  const API_KEY = "8910b1b2edd7ae5fd6d04d5f18c8175f";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`;

  return(
    <div className="App">
      <form>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
