
import {useEffect, useState} from 'react';
import createConnection from './createConnection.jsx'

const ChatRoom = ({roomId}) => {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(()=>{
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };

    }, [serverUrl, roomId])
  return (
    <>
    <label>
        server URL: {' '}
        <input
            value={serverUrl}
            onChange={e=> setServerUrl(e.target.value)}
        />
    </label>
    <h1>Welcome to the {roomId}</h1>
    </>
  )
}

export default ChatRoom