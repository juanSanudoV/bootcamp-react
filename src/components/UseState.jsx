import React,{useState} from 'react'

const UseState = () => {
    const [counter,setCounter] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);
    // const [users, setUsers] = useState(()=>{
    //    console.log('check our function');
    //    const usersLS = localStorage.getItem('users');
    //    return JSON.parse(usersLS) ?? [];
    // })
    // console.log('result', users);

    const onButtonClick = (value) =>{
      // console.log('onButtonClick in parent', value);
      setCounter((prevCounter) => prevCounter + 1)
    }

  return (
    <div>
      {counter}
      <button onClick={()=> onButtonClick('hello')}>Hello</button>
    </div>
  )
}

export default UseState