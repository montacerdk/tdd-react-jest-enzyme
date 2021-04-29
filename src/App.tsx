import * as React from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="App">
      <h1>This is a counter app.</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-button">Increment</button>
    </div>
  );
}

export default App;
