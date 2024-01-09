import React,{useState} from 'react'

const Counter2 = () => {
    const [count, setCount]= useState(0); 
    
    const handleClick = () =>{
        setCount(count + 1)
    }

  return (
    <div>
        <button onClick={handleClick}>
            You pressed me{count} times
        </button>
    </div>
  )
}

export default Counter2