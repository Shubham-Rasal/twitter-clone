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

  console.log(props.data?.like);
  // const likes = props.data?.like;
  // setLike(likes);

  async function  handleLike()  {


    setLike(like + 1);
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
          <h5>

            {props?.data?.tweet}
          </h5>
           
        
         </div>
         <div className="interactions">
           
         <div className="like">
          <button  onClick={handleLike}>

          <Like_Icon />
          </button>
          {like}
          
       
           
         </div>
         <div className="retweet">
          <Retweet_Icon />
          {retweet}
          
           <Button variant='success'> Retweet</Button>
         </div>
         </div>
    </div>
  );
}

export default Single