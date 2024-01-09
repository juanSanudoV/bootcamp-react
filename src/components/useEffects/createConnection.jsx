
const createConnection = (serverUrl, roomId) => {
  // a real implementation would actually connect to the server
  return {
      connect(){
          console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...')
      },
      disconnect(){
        console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      }
  }
}

export default createConnection