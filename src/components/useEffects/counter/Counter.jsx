import React,{useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCount(c => c + 1 );
        }, 1000)
        return ()=> clearInterval(intervalId);
    },[])
    
  return (
    <div>{count}</div>
  )
}

export default Counter