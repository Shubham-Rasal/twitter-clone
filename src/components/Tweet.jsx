import React, { useState, useEffect, useContext } from 'react'
import { Spinner, InputGroup, FormControl } from 'react-bootstrap'
import  GlobalContext  from './context'
import '../app.css'

import Button from 'react-bootstrap/Button'
import context from 'react-bootstrap/esm/AccordionContext'


const Tweet = () => {
  const [tweetData, setTweet] = useState("Tweet empty");
  const [loading, setLoading] = useState(false);

  const { getTweets , skip ,setSkip} = useContext(GlobalContext);


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
     

  };
  useEffect(() => {
    console.log(skip);
    setSkip(0);
    getTweets();
  
  }, [loading])

  return (
    <div>
      <div>

        {
              loading ?

          <Spinner animation="border" variant="primary" /> :
          <div className="tweet ">
            <InputGroup className="mb-5 h-5" type="text" name="tweet" id="tweet" onChange={handleChange} >

              <FormControl
                placeholder="Wjat's on your mind?"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              
            </InputGroup>

            <Button variant='primary' onClick={handleSubmit} >Tweet</Button>
          </div>
          }

      </div>

    </div>
  )
}

export default Tweet