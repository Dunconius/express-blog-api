/*
- Title
- Content
- User (posted by)
- Likes
- Image upload
- Category / tags / keywords
- Audit history
  - user
  - timestamp
  */

const mongoose = require("mongoose");
const { commentSchema } = require("./CommentSchema");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    author: {  //  this takes the ObjectId from the model "User"
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    likes: {  // likes is now refering to an array of users
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}], 
        required: false
    },
    headerImage: {
        type: String, // URL to image store location (don't save images to the database)
        required: false
    },
    tags: {
        type: [String],
        required: true
    },
    categories: {
        type: [String],
        enum: ["life", "travel", "photography", "coding"],
        required: true
    },
    editHistory: {
        type: [{user: String, timestamp: Date}],
        required: false
    },
    comments: {
        type: [commentSchema],
        required: false
    }
},
// mongoose configuration details
{
    timestamps: true
});

// declared all the stuff -> assign to model
const BlogModel = mongoose.model("Blog", blogSchema);

// export model
module.exports = {
    BlogModel
}