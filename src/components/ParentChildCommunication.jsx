import React from 'react';

const Button = ({text, onButtonClick})=>{
    return <button onClick={()=> onButtonClick('hello')}>{text} </button>
}

const ParentChildCommunication = () => {
    const onButtonClick = (value) =>{
        console.log('onButtonClick in parent', value)
    }
  return (
    <div>
        <Button text='Hell React' onButtonClick={onButtonClick}/>
    </div>
  )
}

export default ParentChildCommunication