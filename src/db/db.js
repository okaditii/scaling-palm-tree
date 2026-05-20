const mongoose = require('mongoose')

async function connectDB(){

    await mongoose.connect("mongodb+srv://backend:YHO4ZdUIuu3SIUvT@complete-backend.rmrqbqg.mongodb.net/aditi")
    console.log('Connected to MongoDB')

}

module.exports = connectDB