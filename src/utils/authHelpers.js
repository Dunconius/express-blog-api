const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

// compare password to encrypted password
async function comparePasswords(plaintextPassword, encryptedPassword) {

    let doesPasswordMatch = false;

    doesPasswordMatch = await bcrypt.compare(plaintextPassword, encryptedPassword);

    return doesPasswordMatch;
}

// create a JWT
function createJwt(userId) {
    let newJwt = jwt.sign (
        // paylod of data
        {id: userId},

        // secret key for jwt signature
        process.env.JWT_KEY,


        // options for jwt expiry
        { expiresIn: "7d"}
    );

    return newJwt;
}

// validate a JWT
function validateJwt(jwtToValidate) {
    let isJwtValid = false;

    jwt.verify(jwtToValidate, process.env.JWT_KEY, (error, decodedJwt) => {
        if (error) {
            throw new Error("User JWT not valid!");
        }

        console.log("Decoded JWT data: ");
        console.log(decodedJwt);
        isJwtValid = true;
    });

    return isJwtValid;
}


module.exports = {
    comparePasswords,
    createJwt,
    validateJwt
}