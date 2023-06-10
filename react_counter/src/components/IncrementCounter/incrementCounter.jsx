import React, { useState } from 'react';

const IncrementCounter = (props) => {
  const { initialValue, incrementBy } = props;
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + incrementBy);
  };

  return (
    <div>
      <p>Contador de incremento: {counter}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default IncrementCounter;

