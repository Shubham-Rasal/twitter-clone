import { useState, useEffect } from 'react'
import Tweet from './components/Tweet'
import Feed from './components/Feed'
import Account from './components/Account'
import { ContextProvider } from './components/context'
import './app.css'
import { ExploreIcon, HomeIcon, Logo, MessagesIcon, ProfileIcon, TweetIcon } from './components/Logo'
import { Button } from 'react-bootstrap'
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

            <Logo />

            <div className="navbar-icons">
              <HomeIcon />
              <ExploreIcon />
              <MessagesIcon />
              <ProfileIcon />
              <TweetIcon />
              <Account profile={user} />
              <div className="logout">
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          </div>

          <div className="main">

              {isAuthenticated ? (
                <div>

                  <div>
                    <span>Logged in as: {user?.name}</span>
                  <div className="new-tweet">
                    <Tweet />
                  </div>
                  </div>
                  <div className="feed-container">
                    <Feed />
                  </div>

                </div>
              ) : (
                <div>
                  <Button variant="primary" onClick={()=>loginWithRedirect()}>
                    Login
                  </Button>
                  {/* <button onClick={() => loginWithRedirect()}>Click me to login</button> */}
                </div>

              )}

          </div>

          <div className="right-side">
            <div className="search-bar">
              <input type="text" placeholder=' 🔎 Search Twitter' />
            </div>
            <div className="whats-happening">
              <h4>What's happening</h4>
            </div>
            <div className="who-to-follow">
              who to follow
            </div>
          </div>

        </div>



      </ContextProvider>

    </div>

  )
}

export default App
