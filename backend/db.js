const mongoose = require("mongoose");
const Schema = new mongoose.Schema;

const TweetSchema= ({

tweet:{
    type:String,
    required: true,
    min:6,
    max:100,
}


});


module.exports=mongoose.model("Users",TweetSchema);