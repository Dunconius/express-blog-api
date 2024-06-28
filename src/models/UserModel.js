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
    password: {
        type: String,
        required: true,
        unique: false
    },
    comments: { // we are re-using the schema, but as these comments live on the user and not the blog post they would be completely different comments
        type: [commentSchema],
        required: false
    }
});


userSchema.pre(
    "save",
    async function (next) {
        const user = this;
        console.log("Pre-save hook running.");

        // if the password is not modified, no encryption is done
        if (!user.isModified("password")){
            return;
        }

        console.log("Pre-save hook running and password is modified.");
        // if we reach this point then the password IS modified and therefore must be encrypted

        // TODO: encryption

        next();
    }
)


// creating a model that uses the schema
const UserModel = mongoose.model("User", userSchema);

// export the model
module.exports = {
    UserModel
}