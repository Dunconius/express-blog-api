const mongoose = require("mongoose");
const { commentSchema } = require("./CommentSchema")

// creating the schema...
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    viewHistory: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref:"Blog" }],
        required: false,
        unique: false
    },
    comments: { // we are re-using the schema, but as these comments live on the user and not the blog post they would be completely different comments
        type: [commentSchema],
        required: false
    }
});

// creating a model that uses the schema
const UserModel = mongoose.model("User", userSchema);

// export the model
module.exports = {
    UserModel
}