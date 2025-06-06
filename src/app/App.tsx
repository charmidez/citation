

import { Route, Routes } from "react-router";
import HomeClients from "./pages/HomeClients";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomeClients />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
    
    </>
  );
}

export default App;

{
  /*


  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

    const [count, setCount] = useState(0)

  
        <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
  
  */
}
