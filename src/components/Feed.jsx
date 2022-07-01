import React, { useState,useRef ,useEffect,useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Single from './Single';
import GlobalContext from './context'

// let skip = 0;
// let limit = 3;

const Feed = () => {

  
  const [customClass, setCustomClass] = useState("load");


  const {getTweets,feed ,loading} = useContext(GlobalContext);
  // console.log(getTweets)


  const isMounted = useRef();


  function loadMore() {
    // console.log(feed)
    if(!loading)
    {

      getTweets();
      console.log("call from loadMore")
      // skip = skip + limit + 1;
      // console.log(skip);

    }
  }

  useEffect(() => {
    if(isMounted == true) return ;

    isMounted.current = true;

    getTweets();
    console.log("call from here");
   }, []);




  return (
    <div>
     <h1>Latest Tweets </h1>

      <div className="feed">

        {

          feed.map(tweets => (
            tweets.map(tweet =>(
              <Single data={tweet.tweet} key={tweet._id} />
            ))
            
          ))

        }
      </div>

      {loading ?

        <Spinner animation="border" variant="primary" /> :
        <div className="load-more">
          <Button className={customClass} variant="danger " onClick={loadMore}>Load More... </Button>
        </div>
      }

    </div>
  )
}

export default Feed