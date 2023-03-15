const mongoose = require("mongoose");
const config = require("../config");

mongoose.set("strictQuery", true);
const connectDb = async () => {
    try {
        await mongoose.connect(config.mongoUri);
        console.log("Database connected");
    } catch (err) {
        console.log("Error connecting to database", err);
    }
}

module.exports = connectDb;