const express = require('express');
const app = express();


app.use(express.json());

const post = {}

//post (creating post)
app.post("/create-post",async (req,res)=>{
    const data = req.body;
    const newPost = await postModel.create(data);
    res.status(201).json({
        message: "Post created successfully",
        post: newPost
    });
})


module.exports = app;