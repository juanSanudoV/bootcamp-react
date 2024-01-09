import {useState} from 'react'

const OldValue = () => {
    const[count, setCount] = useState(0);

    const handleClick = () =>{
        
        console.log(count) //0 
        setCount(count + 1) //Request a re-render with 1
        console.log(count) // still 0 
        
        setTimeout(()=>{
        console.log(count) // Also 0 
            
        }, 5000)
    }

    return(
        <>
        {count}
        <button onClick={handleClick }>count</button>
        </>
    )
  
}

export default OldValue