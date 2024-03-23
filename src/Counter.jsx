import { useState } from "react";
export default function Counter() {
  console.log("RE RENDERED");
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  const setToTen = () => {
    setCount(10);
  };
  const addThree = () => {
    setCount((currentCount) => currentCount + 1);
    console.log(count);
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={addCount}>+1</button>
      <button onClick={addThree}>+3</button>
    </div>
  );
}
