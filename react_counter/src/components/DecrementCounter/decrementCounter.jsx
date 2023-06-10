import React, { useState } from 'react';

const DecrementCounter = (props) => {
  const { initialValue, decrementBy } = props;
  const [counter, setCounter] = useState(initialValue);

  const decrement = () => {
    setCounter(counter - decrementBy);
  };

  return (
    <div>
      <p>Contador de decremento: {counter}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default DecrementCounter;
