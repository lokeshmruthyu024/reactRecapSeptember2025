import React, { useState, useCallback } from 'react';
import Button from './Button';

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  // We use useCallback to memoize the increment function.
  // This ensures that the function reference remains the same between renders,
  // as long as the 'count' dependency doesn't change.
  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // Empty dependency array means the function is only created once.

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>`useCallback` Example</h1>
      <p>Count: {count}</p>
      <p>Other State: {otherState}</p>

      {/* The Button component will only re-render when its props change.
        Since handleIncrement is memoized with useCallback, its reference won't change
        on `otherState` updates, preventing unnecessary renders of the Button.
      */}
      <Button onClick={handleIncrement}>Increment Count</Button>
      <button onClick={() => setOtherState(prev => prev + 1)}>
        Change Other State
      </button>
    </div>
  );
};

export default UseCallback;