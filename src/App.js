import "./index.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  console.log(count);

  let color = (count > 0) ? "green" : (count < 0) ? "red" : "black";

  return (
    <div>
      <div className="container">
        <h1 className={color}>Counter</h1>

        <span style={{ color }} id="value">
          {count}
        </span>
        <br></br>
        <button onClick={increment}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
