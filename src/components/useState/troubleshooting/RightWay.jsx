import {useState} from 'react'

const RightWay = () => {
const [count, setCount] = useState(0)

const nextCount = count + 1
setCount(nextCount);

console.log(count); //0
console.log(nextCount); //1

  return (
    <>
    
    </>
  )
}

export default RightWay