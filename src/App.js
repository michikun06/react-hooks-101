import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(0)
  const multiplication = () => setCount(count * 2)
  const division3 = () => setCount(previousCount =>
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  )

  return (
    <React.Fragment>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>＋１</button>
        <button onClick={decrement}>ー１</button>
      </div>
      <div>
        <button onClick={increment2}>＋１</button>
        <button onClick={decrement2}>ー１</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={multiplication}>×２</button>
        <button onClick={division3}>÷３</button>
      </div>
    </React.Fragment>
  );
}

export default App;
