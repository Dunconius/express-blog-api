const { BlogModel } = require("../models/BlogModel");
const { UserModel } = require("../models/UserModel");
const { comparePasswords, createJwt, validateJwt } = require("./authHelpers");
const { databaseConnect, databaseClear, databaseClose } = require("./database");


// insert many...
async function seedUsers () {
    let userData = [
        {
            username: "alex",
            password: "alexiscool"
        },
        {
            username: "pikachu",
            password: "pikachuiscool"
        },
    ];

    let thirdUser = {
        username: "callum",
        password: "callumiscool"
    }

    console.log("Creating user with .create");
    let callum = await UserModel.create(thirdUser);

    console.log("Calling save on the created user:");
    await callum.save();

    console.log("Callum's encrypted password is: " + callum.password);
    let doesCallumsPasswordMatch = await comparePasswords("callumiscool", callum.password);
    console.log("Callum's password is callumiscool: " + doesCallumsPasswordMatch);
    
    console.log("Creating users from insertMany:");
    let result = await UserModel.insertMany(userData)
    console.log(...result, callum);
    return [...result, callum];
};


async function seedBlogPosts (usersToUse) {
    let blogData = [
        {
            title: "blog post 1",
            content: "this is blog post 1 content",
            author: usersToUse[0].id,
            headerImage: "https://placehold.co/300x200",
            tags: ["seeded", "blog"],
            categories: ["coding", "travel"]
        },
        {
            title: "blog post 2",
            content: "this is blog post 2 content",
            author: usersToUse[1].id,
            headerImage: "https://placehold.co/300x200",
            tags: ["seeded", "blog"],
            categories: ["life", "photography"]
        },
        {
            title: "blog post 3",
            content: "this is blog post 3 content",
            author: usersToUse[1].id,
            headerImage: "https://placehold.co/300x200",
            tags: ["seeded", "blog"],
            categories: ["life", "photography"]
        },
    ];

    let result = await BlogModel.insertMany(blogData);
    console.log(result);
    return result;
};


async function seed(){
    
    await databaseConnect();
    await databaseClear();
    
    console.log("Data seeding...");
    
    let newUsers = await seedUsers();
    let newBlogs = await seedBlogPosts(newUsers);


    let newJwt = createJwt(newUsers[0]._id);
    console.log("New JWT: " + newJwt);
    
    validateJwt(newJwt);
    
    console.log("Data seeded!");
    await databaseClose();
};

seed();