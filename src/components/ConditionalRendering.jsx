import React from 'react'

const Loading = () => <div>Loading...</div>
const ConditionalRendering = () => {
    const isLoading =  true;
  return (
    <div>
        App
        {isLoading && <Loading/>}
    </div>
  )
}

export default ConditionalRendering;