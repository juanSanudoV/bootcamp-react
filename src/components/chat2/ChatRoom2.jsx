import React,{useState,useEffect} from 'react';
import {createConnection} from './createConnection'

const ChatRoom2 = ({roomId}) => {
 const [serverUrl, setServerUrl] =  useState('https://localhost:1234');
 const [message, setMessage] = useState('');

 useEffect(()=> {
     const connection = createConnection(serverUrl, roomId);
     connection.connect();
     return () =>{
         connection.disconnect();
     }
 }); // no depency array at all
  return (
    <>
     <label> 
         Server URL:{' '}
         <input 
         value={serverUrl}
         onChange={ e => setServerUrl(e.target.value)} 
         />
     </label>
     <label>
         Your message:{'      '}
         <input value={message} onChange={ e=> setMessage(e.target.value)}/>
     </label>
    </>
  )
}

export default ChatRoom2