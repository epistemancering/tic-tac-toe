import { useState } from 'react'
import './App.css';
import Square from "./Square"
function App() {
  function handleClick() {
    setSquares(["", "", "", "", "", "", "", "", ""])
    player[1](true)
  }
  function calculateWinner(arr) {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i in lines) {
      let [a, b, c] = lines[i]
      console.log("got this far")
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a] + " won."
      }
    }
    return "Who will win?"
  }
  let player = useState(true)
  let [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""])
  return (
    <div className="App">
      <span>
        {calculateWinner(squares)}
      </span>
      <div className = "container">
        {squares.map(function(value, index) {
          return <Square index = {index} player = {player[0]} setPlayer = {player[1]} setSquares = {setSquares} squares = {squares} squareValue = {value} />
        })}
      </div>
      <button onClick = {handleClick}>
        Reset
      </button>
    </div>
  );
}

export default App;
