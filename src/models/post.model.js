const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    picture: {
        type: String,
    },
    caption: {
        type: String,
    }
});

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;