const asyncHandler=require("express-async-handler")
const Todo = require("../models/Todo")

exports.CreateTodo=asyncHandler(async (req, res)=>{

    res.json({message:"TODO CREATE SUCCESS"})
})

exports.GetTodo=asyncHandler(async (req, res)=>{
    const result = await Todo.find()
    res.json({message:"TODO FETCH SUCCESS", result})
})

exports.UpdateTodo=asyncHandler(async (req, res)=>{

    res.json({message:"TODO UPDATE SUCCESS"})
})

exports.DeleteTodo=asyncHandler(async (req, res)=>{

    res.json({message:"TODO DELETE SUCCESS"})
})