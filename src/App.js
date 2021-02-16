
import './App.css';
import React, {useState} from 'react';

function App() {

  const [color, setColor] = useState("red")

  function buttonClick(word){
    handleClick(word)
    setColor("green")
  }

  const words = ["easy", "ok", "difficult", "too-difficult"]

  
  const handleClick = (word) => alert(`That was ${word}`)

  const Click = ({word}) => {
    return (<button style={{backgroundColor: color}} className={word} onClick={() => {buttonClick(word)}}>{word}</button>);
  }
  return (
    <div>
      {words.map(word =>
        <Click
          word={word}/>
      )}
    </div>
  );
}

export default App;