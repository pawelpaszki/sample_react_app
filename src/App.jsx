import React, { useEffect } from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increaseCounter } from '../src/api/counter'

function App() {
  const [counter, setCounter] = useState(0)
  const [instanceID, setInstanceID] = useState("")
  const [fetched, setFetched] = React.useState(false);

  async function getCounter() {
    if (!fetched) {
      const instanceData = await increaseCounter();
      setCounter(instanceData.counter);
      setInstanceID(instanceData.instanceId);
      setFetched(true);
    }
  }

  useEffect(() => {
    setTimeout(async () => getCounter(), 1);
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
      <div>
        Counter:
      </div>
      <h4 id="counter">
        {counter}
      </h4>
      <div>
        Instance ID:
      </div>
      <h5 id="instance-id">
        {instanceID}
      </h5>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  </>
}

export default App
