const express = require('express');
const path = require('path');
const cors = require('cors');
const { MongoClient, ObjectId } = require("mongodb");
// const mongoose = require('mongoose');

const Tweet = require('./db');
const app = express();


app.listen(5000, () => { console.log("Listening at port 5000"); });
app.use(cors());
app.use(express.static('Twitter-clone'));
app.use(express.json({ limit: '1mb' }));

const dbURL = "mongodb+srv://shubham:shubham123@forms-pro.g4unt.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(dbURL, { useNewUrlParser: true });

async function Connect() {

    // Connect to the MongoDB cluster
    await client.connect();
    console.log("Connected to db");

}

Connect();

async function addTweet(Tweet) {

    const db = await client.db("Tweets");
    const collection = await db.collection("Tweets");
    const p = await collection.insertOne(Tweet);
    console.log(p)
}



app.post('/tweet', async (req, res) => {
    console.log(req.body);

    const tweet = new Tweet({

        tweet: req.body.tweetData,
        user: "shubham",
        like: 2,
        
    });
    console.log(tweet);
    addTweet(tweet);
    res.json("Request received.");
});

app.post('/feed', async (req, res) => {

    console.log(req.body);

   const {skip = 0 , limit = 10} = req.body;
     

    async function allTweets() {
   
        const db = await client.db("Tweets");
        const collection = await db.collection("Tweets");
        const total = await collection.countDocuments();
        console.log(total);
        const left = total - skip;
        console.log(left)

        if(left>0){

            collection.find({}).sort({_id:-1}).skip(skip).limit(limit).toArray(function (err, result) {
                if (err)
                console.error(err)
                
                res.json(result)
            })
        }
        else{
            res.json("Tweets finished!");
        }
    
    }

    allTweets();

});


app.post('/like', async (req, res) => {
    
        console.log(req.body);
    
        const {tweetId} = await  req.body;
        console.log(tweetId);
    
       
            const db = await client.db("Tweets");
            const collection = await db.collection("Tweets");
            const p = await collection.updateOne({ _id:ObjectId(tweetId) }, { $inc: { like: 1 } });
            console.log(p)
            res.json("Request received.");
        
    
    }
    );

    app.post('/retweet', async (req, res) => {
        console.log(req.body);
        const {tweetId} = req.body;
        console.log(tweetId);
        async function retweetTweet() {
            const db = await client.db("Tweets");
            const collection = await db.collection("Tweets");
            const p = await collection.updateOne({ _id: tweetId }, { $inc: { retweets: 1 } });
            console.log(p)
            res.json("Request received.");
        }
        retweetTweet();
    }
    );
