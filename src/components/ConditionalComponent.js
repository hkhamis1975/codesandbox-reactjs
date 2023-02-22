import { useState } from "react";

export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);
  // const displayElement = (status) => {
  //   setDisplay(status);
  // };
  let component = display ? (
    <h3>Display Conditional Component</h3>
  ) : (
    <h3>Nothing to Display</h3>
  );

  // displayElement(display);
  return (
    <div>
      <h1>ConditionalComponent.js</h1>
      {component}
    </div>
  );
}
