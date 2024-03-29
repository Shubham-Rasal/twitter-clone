import React, { useState, useEffect, useContext } from 'react'
import { Spinner, InputGroup, FormControl } from 'react-bootstrap'
import '../app.css'

import Button from 'react-bootstrap/Button'


const Tweet = () => {
  const [tweetData, setTweet] = useState("");
  const [loading, setLoading] = useState(false);



  function handleChange(e) {
    setTweet(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log(tweetData);

    const options = {
      method: 'POST',

      body: JSON.stringify({ tweetData }),
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await fetch("http://localhost:5000/tweet", options);
    
    console.log("calling getTweets from tweet..")
 
    
      setLoading(false);
      setTweet("");
     

  };
 
  return (
    <div>
      <div>

        {
              loading ?

          <Spinner animation="border" variant="primary" /> :
          <div className="tweet ">
            <InputGroup className="mb-5 h-5 p-1" type="text" name="tweet" id="tweet" onChange={handleChange} >

              <FormControl
                placeholder="What's on your mind?"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              
            </InputGroup>
             <div className="tweet-btn container p-3">

            <Button variant='primary' disabled={tweetData.length===0} onClick={handleSubmit} >Tweet</Button>
             </div>
          </div>
          }

      </div>

    </div>
  )
}

export default Tweet