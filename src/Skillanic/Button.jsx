import React from 'react';

// Use React.memo to prevent unnecessary re-renders of the Button component.
// It will only re-render if its props change.
const Button = React.memo(({ onClick, children }) => {
  console.log('Button component rendered!');
  return (
    <button onClick={onClick} style={{ margin: '10px' }}>
      {children}
    </button>
  );
});

export default Button;