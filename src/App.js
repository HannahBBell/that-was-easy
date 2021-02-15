import logo from './logo.svg';
import './App.css';

function App() {
  
  const InteractiveButton = () => alert("That was easy");
  
  // function InteractiveButton() {
  //   alert("That was easy");
  // };


  return (
    <div className="App">
      <button onClick={InteractiveButton}>EASY</button>
    </div>
  );
}

export default App;
