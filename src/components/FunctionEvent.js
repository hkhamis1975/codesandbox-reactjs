function FunctionEvent() {
  const handleEvent = () => {
    console.log("FunctionEvent.js: Clicked");
  };
  return (
    <div>
      <h2>FunctionEvent.js: Functional Component</h2>
      <button onClick={handleEvent}>Click</button>
    </div>
  );
}

export default FunctionEvent;
