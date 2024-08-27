const asyncHandler=require("express-async-handler")
const Todo = require("../models/Todo")
const { IO } = require("../socket/Socket")

exports.CreateTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    const result = await Todo.find()
    IO.emit("todo-create", result)                       // for Data send
    res.json({message:"TODO CREATE SUCCESS"})
})

exports.GetTodo = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({message:"TODO FETCH SUCCESS", result})
})

exports.UpdateTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    const result = await Todo.find()
    IO.emit("todo-create", result) 
    res.json({message:"TODO UPDATE SUCCESS"})
})

exports.DeleteTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    const result = await Todo.find()
    IO.emit("todo-create", result)  
    res.json({message:"TODO DELETE SUCCESS"})
})