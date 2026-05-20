const express = require('express')
const noteModel = require('./models/note.model')

const app = express()

//POST - ADDING A NEW NOTE
app.post('/notes', async (req,res) => {
    const data = req.body
    await noteModel.create(data)({
        title:data.title,
        description:data.description
    })

    res.send("Note added successfully")
})

app.get('/notes', async(req,res)=>{
    const notes =await noteModel.find()
    res.send.json({
        message:"Notes fetched successfully",
        notes:notes 
    })
})

app.delete('/notes/:id', async(req,res)=>{
    const id = req.params.id
    const note = await noteModel.findOneAndDelete({ 
        _id: id 
    })
    res.status(200).json({
        message: "Note deleted successfully"
    })
})

app.patch('/notes/:id', async(req,res)=>{
    const id = req.params.id
    const description = req.body.description
    const note = await noteModel.findOneAndUpdate({
        _id: id 
    },{description: description})

    res.status(200).json({
        message: "Note updated successfully",
    })
})

module.exports = app