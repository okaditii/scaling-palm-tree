const mongoose = require('mongoose');


async function connectDB(){
    await mongoose.connect("mongodb+srv://backend:YHO4ZdUIuu3SIUvT@complete-backend.rmrqbqg.mongodb.net/project-1");
    console.log("Connected to MongoDB");
}

module.exports = connectDB;