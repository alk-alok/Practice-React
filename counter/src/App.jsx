import { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState(15);

  function IncreaseHandle(){
    if(value<300)
    setValue((prevValue) => prevValue+1);
    setValue((prevValue) => prevValue+1);
    setValue((prevValue) => prevValue+1);
    setValue((prevValue) => prevValue+1);
    setValue((prevValue) => prevValue+1);

  }
  function DecreaseHandle(){
    if(value>0)
      setValue(value-1);
    
  }
  
  return (
    <>
      <h1>Learning Projects</h1>
      <h2>Counter Value : {value}</h2>
      <button onClick={IncreaseHandle}>Increase Value</button>
      <br />
      <br />
      <button onClick={DecreaseHandle}>Decrease value</button>
    </>
  )
}

export default App
