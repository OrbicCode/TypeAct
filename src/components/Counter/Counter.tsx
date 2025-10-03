import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  function increment(): void {
    setCount((prev: number): number => prev + 1);
  }

  function decrement(): void {
    if (count > 0) {
      setCount((prev: number): number => prev - 1);
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <div>
        <button onClick={increment}>Increment +</button>
        <button onClick={decrement}>Decrement -</button>
      </div>
    </>
  );
}
