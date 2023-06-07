// ./src/components/05-use-effect-conditional-updates/TimerFour.js
import React, { useState, useEffect } from "react";

function TimerFour() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect - Mounting (initial render)");
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("Component Unmounting");
    };
  }, []);
  

  // Add a new effect that will run only
  // when the `count` value updates
  useEffect(() => {                              // <== ADD
    console.log("useEffect - on update");
    document.title = count;
  }, [count] );     
  
  // [count] means: this effect depends on the value `count`,
  // therefore re-run the effect every time `count` updates.
  

  return (
    <div className="Timer">
      <h2>Timer Four</h2>
      <h3>{count}</h3>
    </div>
  );
}

export default TimerFour;
