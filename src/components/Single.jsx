import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap';
import './single.css'
import { Like_Icon,Retweet_Icon } from '../assets/tweet_icons';
import { TweetIcon } from './Logo';
const Single = props => {

  // const { data } = props;
  // const { tweet, likes, retweets } = data;
  const [like, setLike] = useState(0);
  const [retweet, setRetweet] = useState(0);
  const [qoute, setQoute] = useState("");
  //declare anonymous function
   async function getQuote() {
    const data = await fetch('https://animechan.vercel.app/api/random')
    const json = await data.json()
    let test = await json.quote;
    console.log(test) 
    setQoute(test) 
        
}


useEffect(() => {
  getQuote()  
}, [])

  console.log(props);

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
             
            <p>{qoute}</p>
             
            
           
         </div>
         <div className="interactions">
           
         <div className="like">
          <button  onClick={handleLike}>
          <Like_Icon  />
          </button>
          {like}       
       
           
                   
       
           {/* <Button variant='outline-info' onClick={handleLike}>Like</Button> */}
         </div>
         <div className="retweet">
          {retweet}
          <Retweet_Icon />
          
           {/* <Button variant='success' onClick={()=>getQuote()}> Retweet</Button> */}
         </div>
         </div>
    </div>
  );
}

export default Single