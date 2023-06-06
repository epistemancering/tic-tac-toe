import logo from './logo.svg';
import './App.css';
import Square from "./Square"
function App() {
  let propVariable = "This is a prop"
  return (
    <div className="App">
      <Square propVar = {propVariable} />
    </div>
  );
}

export default App;
