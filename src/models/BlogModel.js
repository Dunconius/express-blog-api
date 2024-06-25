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

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String, // come back later and replace with Mongoose object ID
        required: true
    },
    likes: {
        type: [String], // come back later and replace with Mongoose object ID
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