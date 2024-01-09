import React,{ useState } from 'react'

const TextField = () => {
    const [text, setText] =  useState('hello');
    const handleChange = (e) =>{
        setText(e.target.value)
    }
  return (
    <>
    <input value={text} onChange={handleChange}/> 
       <p>You typed: {text}</p>
       <button onClick={()=> setText('hello')}>RESET</button>
    </>
  )
}

export default TextField