import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {

  alert("You’ve reached the limit!");
    }
  };

  return (
    <div className="App">
      <h1>Click Counter App</h1>
      <div className="counter-container">
        <button onClick={increment}>Increase</button>
        <h2>{count}</h2>
        <button onClick={decrement}>Decrease</button>
      </div>
      {count === 0 && <p>You’ve reached the limit!</p>}
    </div>
  );
}


export default App;

