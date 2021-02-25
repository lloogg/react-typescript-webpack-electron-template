// import React, { useState } from 'react';

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// export default Example;
import React, { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  let decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  let incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default Example;
