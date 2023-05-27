import React, { useState } from 'react';

function Counter(props) {
  
  // myVar, myFuncToUpdateMyVar = useState(initialValueOfMyVar)
  const [count, setCount] = useState(20);
  
  return (
    <div className="Counter">
      <h2>Counter {props.label}</h2>
      <p>You clicked {count} times</p>
      <button onClick={ () => { setCount(count + 100) }}> + </button>
      <button onClick={ () => setCount(count - 1) }> - </button>
    </div>
  );
}

export default Counter;
