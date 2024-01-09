import React,{useState} from 'react';
import ChatRoom3 from './ChatRoom3';

const IndexChat3 = () => {
    const [roomId, setRoomId] =  useState('general');
    
  return (
    <>
    <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
         <option value='general'> general</option>
         <option value='travel'> travel</option>
         <option value='music'> music</option>
        </select>
        <hr />
        <ChatRoom3 roomId={roomId}/>
    </label>
    </>
  )
}

export default IndexChat3