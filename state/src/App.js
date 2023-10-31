
import React,{useState} from 'react';
import './App.css';

import Decrement from './decrement';
import Increment from './increment';

function App() {
const [count,setCount] = useState(0)

  return (
    <div className="App">
      <div>State</div>

      <p>{count}</p>
      <Decrement count={count} setCount={setCount}/>
      <Increment setCount={setCount} c={count}/>
     
    </div>
  );
}

export default App;
