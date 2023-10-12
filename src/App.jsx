import React, { useEffect } from "react";
import { useState } from 'react'
import logo from './crest.svg'
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
      console.log(`fetched from db: counter value: '${instanceData.counter}', instance ID: '${instanceData.instanceId}'`);
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
      <img src={logo} className="logo react" />
    </div>
  </>
}

export default App
