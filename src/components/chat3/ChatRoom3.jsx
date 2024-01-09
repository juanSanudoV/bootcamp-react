import React,{useState,useEffect} from 'react';
import  {createConnection} from './chat3.js'

const serverUrl = 'https://localhost:1234';

const ChatRoom3 = ({roomId}) => {

    const [message, setMessage] = useState('');
    
    useEffect(()=>{
        function createOptions(){
            return{
                serverUrl: serverUrl,
                roomId: roomId,
            };
        }
        const options = createOptions();
        const connection = createConnection(options);
        connection.connect();
        return ()=> connection.disconnect();
    },[roomId])

  return (
    <>
    <h1> Welcome to the {roomId}</h1>
    <input value={message} onChange={e=> setMessage(e.target.value)}/>
    </>
  )
}

export default ChatRoom3