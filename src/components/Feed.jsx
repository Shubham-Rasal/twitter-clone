import React, { useState, useRef, useEffect, useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Single from './Single';

import './single.css'


// let skip = 0;
// let limit = 3;

const Feed = () => {






  async function getTweets() {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`http://localhost:5000/feed`, options);
    const data = await response.json();
    console.log(data);

  }





const [customClass, setCustomClass] = useState("load");
const [tweets, setTweets] = useState([]);





useEffect( () => {

  (async ()=>{

    
      const data = await getTweets();
      console.log(data)
      setTweets(data);
  })()


}, []);




return (
  <>



    <div className="feed">
      <Single />
      <Single />
      <Single />

    </div>



  </>
)
}

export default Feed