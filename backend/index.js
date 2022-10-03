const express = require('express');
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');
const { MongoClient, ObjectId } = require("mongodb");

const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi({
    appKey: 'Zhh1LFU5KtvNFtKdwpaq0Qea3',
    appSecret: 'ZULL1zFAQEMSK6nV8pZ6VyS5Bu9rV3bSrNmfytQOZvnHPQOVw9',
    accessToken: '1533393427190394880-C6AQUPGa7FWndjzBHTlMJEjnJQMPx7',
    accessSecret: 'Dok7FVu02sefGTRASlm9Wuz63ODOvzlT8aPdMAYTvz0xL',
});

// const mongoose = require('mongoose');

const Tweet = require('./db');
const app = express();


app.listen(5000, () => { console.log("Listening at port 5000"); });
app.use(cors());
app.use(express.static('Twitter-clone'));
app.use(express.json({ limit: '1mb' }));

const dbURL = "mongodb+srv://shubham:shubham123@forms-pro.g4unt.mongodb.net/?retryWrites=true&w=majority";




// app.post('/tweet', async (req, res) => {
//     console.log(req.body);

//     const tweet = new Tweet({

//         tweet: req.body.tweetData,
//         user: "shubham",
//         like: 2,
        
//     });
//     console.log(tweet);
//     addTweet(tweet);
//     res.json("Request received.");
// });

app.get('/feed', async (req, res) => {

    
        let people = ['elonmusk','nasa','javascript','india']
          let feed = [];
       
    
        const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAANAShwEAAAAAqkE9wZLbjW7dmDPafrAMX6frA8A%3DdCpBIOcMMr401vu9uDE74vfpxCgJUOhTeNY074URbWbUiIW5zj'
        
         
        const url = `https://api.twitter.com/2/tweets/search/recent?query=`
        let params = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + BEARER_TOKEN,
            }
        }

        people.forEach(async person =>{

            
            const twitResult = await fetch(url+person, params)
            const data = await  twitResult.json();
            console.log('twitter:')
            feed.push(data)
        },)


   
    res.json({message:'success',
        data:feed,
})

});


// app.post('/like', async (req, res) => {
    
//         console.log(req.body);
    
//         const {tweetId} = await  req.body;
//         console.log(tweetId);
    
       
//             const db = await client.db("Tweets");
//             const collection = await db.collection("Tweets");
//             const p = await collection.updateOne({ _id:ObjectId(tweetId) }, { $inc: { like: 1 } });
//             console.log(p)
//             res.json("Request received.");
        
    
//     }
//     );

//     app.post('/retweet', async (req, res) => {
//         console.log(req.body);
//         const {tweetId} = req.body;
//         console.log(tweetId);
//         async function retweetTweet() {
//             const db = await client.db("Tweets");
//             const collection = await db.collection("Tweets");
//             const p = await collection.updateOne({ _id: tweetId }, { $inc: { retweets: 1 } });
//             console.log(p)
//             res.json("Request received.");
//         }
//         retweetTweet();
//     }
//     );
