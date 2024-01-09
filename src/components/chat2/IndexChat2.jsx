import React,{useState} from 'react';
import ChatRoom2 from './ChatRoom2'

const IndexChat2 = () => {
    const [ show, setShow ] =  useState(false);
    const [roomId, setRoomId] = useState('general');

  return (
    <>
    <label>
        Choose the chat room:{' '}
        <select
           value={roomId}
           onChange={ e => setRoomId(e.target.value)}
        > 
        <option value='general'>general</option>
        <option value='travel'>travel</option>
        <option value='music'>music</option>
        </select>
        <button onClick={()=> setShow(!show)}>
            {show ? 'Close chat': 'Open chat'}
        </button>
    </label>
    {show && <hr/>}
    {show && <ChatRoom2 roomId={roomId}/>}
    </>
  )
}

export default IndexChat2