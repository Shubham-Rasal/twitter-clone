import React from 'react'
import { Button } from 'react-bootstrap';
import './single.css'

const Single = props => {

  console.log(props);


  async function  handleLike()  {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tweetId: props.data._id }),
    };
    const response = await fetch(`http://localhost:5000/like`, options);
    const data = await response.json();
    console.log(data);

  }

  async function  handleRetweet() {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }

    };
  }    

  
  return (
    <div className='single-tweet'>
      
         <div className="tweet-data-container">
             <h3>{props.data.tweet}</h3>
        
         </div>
         <div className="interactions">
           
         <div className="like">
           <Button variant='outline-info' onClick={handleLike}>like</Button>
         </div>
         <div className="retweet">
           <Button variant='success'> Retweet</Button>
         </div>
         </div>
    </div>
  );
}

export default Single