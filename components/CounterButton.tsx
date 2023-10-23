import { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>You clicked me {count} times</p>
    </div>
  );
};

export default CounterButton;