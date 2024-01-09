import React,{useState} from 'react'

const CheckBox = () => {
    const [liked, setLiked]= useState(true);
    console.log('james2')
    const handleChange=(e)=>{
        console.log(e.target,'james')
        setLiked(e.target.checked)
    }
  return (
    <>
     <label>
         <input 
            type='checkbox'
            checked={liked}
            onChange={handleChange}
         />
         I liked this
     </label>
     <p> You {liked ? 'liked' : 'did not like'} this.</p>
    </>
  )
}

export default CheckBox