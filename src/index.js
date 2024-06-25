const { app } = require("./server.js");
const { databaseConnect } = require("./utils/database.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server successfully started!");
    // Connecting to the server AFTER the server has successfully started running
    databaseConnect();
});