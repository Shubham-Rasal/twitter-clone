import { useState } from 'react'
import Tweet from './components/Tweet'
import Feed from './components/Feed'
import { ContextProvider } from './components/context'
import './app.css'


import { ContextHolder } from '@frontegg/rest-api';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import { AdminPortal } from '@frontegg/react'

function App() {

  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };
  const handleClick = () => {
    AdminPortal.show();
  };
  


  return (
    <div>
      <ContextProvider>
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
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
          <button onClick={handleClick}>Settings</button>

        </div>
      </ContextProvider>

    </div>

  )
}

export default App
