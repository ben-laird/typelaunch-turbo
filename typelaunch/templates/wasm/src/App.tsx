import { useEffect, useState } from "react";

import "./App.css";
import viteLogo from "./assets/vite.svg";

import init, { greet } from "rsw-hello";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + WASM</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button type="button" onClick={() => greet("rust/wasm")}>
          hello wasm
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
