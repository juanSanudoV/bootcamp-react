import {useState} from 'react';
import CountLabel from './CountLabel';

const App2 = () => {
    const [count, setCount] = useState(0);

  return (
    <>
    <button onClick={()=> setCount(count + 1)}>increment</button>
    <button onClick={()=> setCount(count - 1)}>decrement</button>
     <CountLabel count={count}/>
    </>
  )
}

export default App2