import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import './single.css'
import { Like_Icon,Retweet_Icon } from '../assets/tweet_icons';
import { TweetIcon } from './Logo';
const Single = props => {

  // const { data } = props;
  // const { tweet, likes, retweets } = data;
  const [like, setLike] = useState(0);
  const [retweet, setRetweet] = useState(0);

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
             <h3>{props?.data?.tweet}
             Loredsjfhksdfhksfhkd
             fskdfhksdfhkdsjfhkdhfkd</h3>
        
         </div>
         <div className="interactions">
           
         <div className="like">
          <Like_Icon />
          {like}
          
       
           {/* <Button variant='outline-info' onClick={handleLike}>Like</Button> */}
         </div>
         <div className="retweet">
          <Retweet_Icon />
          {retweet}
          
           {/* <Button variant='success'> Retweet</Button> */}
         </div>
         </div>
    </div>
  );
}

export default Single