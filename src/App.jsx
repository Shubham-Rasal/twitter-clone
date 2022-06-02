import { useState } from 'react'
import Tweet from './components/Tweet'
import Feed from './components/Feed'
import { ContextProvider } from './components/context'

function App() {


  return (
    <div>
      <ContextProvider>
        <Tweet />
        <Feed />
      </ContextProvider>

    </div>

  )
}

export default App
