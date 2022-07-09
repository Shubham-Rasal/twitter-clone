import { useState, useEffect } from 'react'
import Tweet from './components/Tweet'
import Feed from './components/Feed'
import { ContextProvider } from './components/context'
import './app.css'
import { ExploreIcon, HomeIcon, Logo, MessagesIcon, ProfileIcon, TweetIcon } from './components/Logo'

import { ContextHolder } from '@frontegg/rest-api';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";
import { AdminPortal } from '@frontegg/react'

function App() {

  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // const [loggedIn, setLoggedIn] = useState(false);



  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };



  // Uncomment this to redirect to login automatically
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     loginWithRedirect();
  //   }
  // }, [isAuthenticated, loginWithRedirect]);



  return (



    <div>
      <ContextProvider>


        <div className="app-container">
          
          
          <div className="navbar-container">
            
          <Logo/>
          <div className="navbar-icons">
           <HomeIcon/>
           <ExploreIcon/>
           <MessagesIcon/>
           <ProfileIcon/>
           <TweetIcon/>
           </div>
          </div>

          <div className="main">

            <div className="new-tweet">
              {isAuthenticated ? (
                <div>
                  <div>
                    <img src={user?.profilePictureUrl} alt={user?.name} />
                  </div>
                  <div>
                    <span>Logged in as: {user?.name}</span>
                  </div>
                  <div>
                    <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
                  </div>
                </div>
              ) : (
                <div>
                  <button onClick={() => loginWithRedirect()}>Click me to login</button>
                </div>
              )}
              <Tweet />
            </div>
            <div className="feed-container">
              <Feed />

            </div>
          </div>

          <div className="right-side">
            <div className="whats-happening">
              <h1>What's happening</h1>
            </div>
            <div className="follow-recommend">
              who to follow
            </div>

          </div>

        </div>



      </ContextProvider>

    </div>

  )
}

export default App
