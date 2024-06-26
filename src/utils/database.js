const mongoose = require("mongoose");

async function databaseConnect(){
    let databaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/blog-db";

    await mongoose.connect(databaseURL);
    console.log("Database connected!");
};

async function databaseClose(){
    await mongoose.connection.close();
    console.log("Disconnected from database!");
}

async function databaseClear(){
    await mongoose.connection.db.dropDatabase();   
    console.log("Database cleared!");
}

module.exports = {
    databaseConnect,
    databaseClose,
    databaseClear
};