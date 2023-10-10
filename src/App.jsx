import React, { useEffect } from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increaseCounter } from '../src/api/counter'

function App() {
  const [counter, setCounter] = useState(0)
  const [instanceID,setInstanceID] = useState("")
  const [fetched, setFetched] = React.useState(false);

  async function getCounter() {
    const instanceData = await increaseCounter();
    console.log(instanceData);
    setCounter(instanceData.counter);
    setInstanceID(instanceData.instanceId);
    setFetched(true);
  }

  useEffect(() => {
    setTimeout(async () => getCounter(), 20);
  }, []);

  if (!fetched) {
    return <>
      <div>
        Counter: {counter}
      </div>
    </>
  }

  return <>
      <div>
        Counter: {counter}
        <br />
        Instance ID: {instanceID}
        <br />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </>

  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
