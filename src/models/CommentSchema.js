const mongoose = require("mongoose");
// a comment can't exist on it's own
// a sub-document can't exist on it's own

// creating the schema...
const commentSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    content: {
        type:String,
        required: true
    },
    likes: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}], 
        required: false
    }
});

// export the schema
module.exports = {
    commentSchema
}