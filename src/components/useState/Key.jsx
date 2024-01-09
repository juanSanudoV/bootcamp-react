import {useState} from 'react'

const Key = () => {
    const [version, setVersion] = useState(0);


    const handleReset = ()=>{
        setVersion(version + 1)
    }
  return (
    <>
  <button onClick={handleReset}>Reset</button>
  <Form key={version}/>
    </>
  )
}


const Form = () =>{
    const [name, setName] =  useState('Taylor')

    return(
        <>
        <input 
          value={name}
          onChange={e=> setName(e.target.value)}
          /> 
          <p>Hello, {name}</p>
        </>
    )
}

export default Key