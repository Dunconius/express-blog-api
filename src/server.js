const express = require("express");
const app = express();

// Allows POST request to have JSON body content
// Having this first means that all subequent routes are configured to recieve json data
app.use(express.json())


app.get("/", (request, response, next) => {
    
    response.json({
        message: "Hello World!"
    });
});


const blogRouter = require("./controllers/BlogRouter.js");
app.use("/blogs", blogRouter);


app.get("*", (request, response, next) => {
    response.status(404).json({
        message: "Page not found."
    });
});


app.use((error, request, response, next) => {
	response.status(error.status || 500).json({
		message: "Error occured!",
		error: error.message
	});
});

module.exports = {
    app
}

