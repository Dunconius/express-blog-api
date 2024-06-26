const mongoose = require("mongoose");


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
    }
});

// creating a model that uses the schema
const UserModel = mongoos.model("User", userSchema);

// export the model
module.exports = {
    UserModel
}