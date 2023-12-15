import React, { useState } from "react";

const ExampleComponent: React.FC = () => {
  const [counter, setCounter] = React.useState(0);
  return (<>
    <h1>this is ExampleComponent.</h1>
    <button onClick={() => setCounter(counter + 1)}>ExampleComponent counter: {counter}</button>
  </>)
}

export { ExampleComponent };
