import React from 'react'
import { Button } from 'react-bootstrap';
import './single.css'

const Single = props => {

  // console.log(props);

  
  return (
    <div className='single-tweet'>
      
         <div className="tweet-data-container">
             <h3>{props.data}</h3>
        
         </div>
         <div className="interactions">
           
         <div className="like">
           <Button variant='outline-info'>like</Button>
         </div>
         <div className="retweet">
           <Button variant='success'> Retweet</Button>
         </div>
         </div>
    </div>
  );
}

export default Single