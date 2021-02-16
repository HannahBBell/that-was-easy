import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const words = ["easy", "ok", "difficult", "too-difficult"]

  
  const handleClick = (word) => alert(`That was ${word}`)

  const Click = ({word, hello}) => {
   return (<button className={word} onClick={() => handleClick(word)}>{word}{hello}</button>);
  }
  return (
    <div>
      {words.map(word =>
        <Click
          word={word}
          hello='hello'/>)}
    </div>
  );
}

export default App;