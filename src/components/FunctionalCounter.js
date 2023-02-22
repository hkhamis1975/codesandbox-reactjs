const { useState } = require("react");

function FunctionalCounter() {
  const resetval = 10;
  const [counter, setCounter] = useState(resetval);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(resetval);
  };
  return (
    <div>
      <div>
        <h1>FunctionalComponent.js: Counter Value: {counter}</h1>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default FunctionalCounter;
