const { UserModel } = require("../models/UserModel");
const { databaseConnect, databaseClear, databaseClose } = require("./database");


// insert many...
async function seedUsers (usersToUse) {
    let userData = [
        {
            username: "alex"
        },
        {
            username: "pikachu"
        },
    ]
    
    let result = await UserModel.insertMany(userData)
    console.log(result);
    return result
};

async function seedBlogPosts () {

};
async function seed(){
    
    await databaseConnect();
    
    await databaseClear();
    
    console.log("Data seeding...");
    let newUsers = await seedUsers();
    let newBlogs = await seedBlogPosts(newUsers);
    console.log("Data seeded!");
    
    await databaseClose();
};

seed();