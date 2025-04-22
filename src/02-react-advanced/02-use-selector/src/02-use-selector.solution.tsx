import React, { useState } from 'react';

function App(): React.ReactElement {
  const [count, setCount] = useState<number>(0);
  
  return (
    <div className="app">
      <h1>Use Selector</h1>
      <div className="card">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Счетчик: {count}
        </button>
        <p>
          Отредактируйте <code>src/02-use-selector.problem.tsx</code> и сохраните для перезагрузки.
        </p>
      </div>
    </div>
  );
}

export default App;