const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = new mongoose.Schema;

const TweetSchema= ({

tweet:{
    type:String,
    required: true,
    min:6,
    max:100,
},
user:{
    type:String,
    
},
like:{
   type:Number,
   default:0,    
}



});


const UserSchema= ({
    name: String,
    email: String,
    password: String,
    tweets:[TweetSchema],
    photo: String,
    following: [String],
    followers: [String],
    
});

module.exports=mongoose.model("Tweets",TweetSchema);
module.exports=mongoose.model("User",UserSchema);