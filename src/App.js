import { useState } from 'react'
import './App.css';
import Square from "./Square"
function App() {
  let player = useState(true)
  let [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  return (
    <div className="App">
      <Square player = {player[0]} setPlayer = {player[1]} setSquares = {setSquares} squares = {squares} />
    </div>
  );
}

export default App;
