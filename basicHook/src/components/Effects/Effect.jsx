import React, { useEffect, useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Component Re-Render");
    console.log(count);
    console.log(age);

    return () => {
      console.log("unmount");
    };
  }, [count, age]);

  return (
    <div
      style={{
        border: "1px Solid White",
        padding: "40px",
        marginTop: "100px",
      }}
    >
      <div className="counter1">use E F F E C T S</div>
      <h3>Count:- {count}</h3>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        -
      </button>
      <h3>Age:- {age}</h3>
      <button
        onClick={() => {
          setAge((age) => age + 1);
        }}
      >
        -
      </button>
    </div>
  );
}