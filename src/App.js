import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

const words = ["easy", "ok", "difficult", "too difficult"]

let practice = 'easy'

const click = (n) => <button onClick={() => alert(`That was ${n}`)}>{n}</button>





  return (
    <div className="App">
      {words.map(click)}
    </div>
  );
}

export default App;