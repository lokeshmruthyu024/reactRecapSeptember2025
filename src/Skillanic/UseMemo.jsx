import React, { useState, useMemo } from 'react';

// A mock expensive function that simulates a slow calculation
const expensiveCalculation = (num) => {
  console.log('Performing expensive calculation...');
  // Simulates a heavy, time-consuming task
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  // useMemo caches the result of the expensiveCalculation.
  // It only re-runs when 'count' changes, not when 'theme' changes.
  const memoizedCalculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);
  console.log('Hello')
  return (
    <div style={{ padding: '20px', background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
      <h1>`useMemo` Example</h1>
      <p>Count: {count}</p>
      <p>Expensive Calculation Result: {memoizedCalculation}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Counter</button>
      <button onClick={() => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

export default UseMemo;