import {useState} from 'react'

const CountLabel = ({count}) => {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);

  if(prevCount !== count){
    setPrevCount(count)
    setTrend(count > prevCount ? 'increasing' : 'decreasing');
  }


  return (
    <>
    <h1>{count}</h1>
    {trend && <p>The count is {trend}</p>}
    </>
  )
}

export default CountLabel