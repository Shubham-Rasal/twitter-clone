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
          <div className="navbar-container">
            Navbar
          </div>
          <div className="main">

            <div className="new-tweet">
              <Tweet />
            </div>
            <div className="feed-container">
              <Feed />

            </div>
          </div>
        </div>
      </ContextProvider>

    </div>

  )
}

export default App
