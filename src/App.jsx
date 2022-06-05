import { useState } from 'react'
import Tweet from './components/Tweet'
import Feed from './components/Feed'
import { ContextProvider } from './components/context'
import './app.css'
function App() {


  return (
    <div>
      <ContextProvider>
        <div className="app-container">
          
        <div className="new-tweet">

        <Tweet />
        </div>
        <Feed />
        </div>
      </ContextProvider>

    </div>

  )
}

export default App
