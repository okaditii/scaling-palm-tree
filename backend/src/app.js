const express = require('express');
const multer = require('multer');
const postModel = require("./models/post.model");
const uploadFile = require("./services/storage.service");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

const post = {}

//post (creating post)
app.post("/create-post", upload.single("image"), async (req,res)=>{
    const result = await uploadFile(req.file.buffer);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
})

//GET (fetching post)
app.get("/posts", async (req,res)=>{
    const posts = await postModel.find();
    res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
})


module.exports = app;