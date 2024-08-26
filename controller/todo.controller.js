const asyncHandler=require("express-async-handler")

exports.CreateTodo=asyncHandler(async (req, res)=>{

    res.json({message:"TODO CREATE SUCCESS"})
})

exports.GetTodo=asyncHandler(async (req, res)=>{

    res.json({message:"TODO FETCH SUCCESS"})
})

exports.UpdateTodo=asyncHandler(async (req, res)=>{

    res.json({message:"TODO UPDATE SUCCESS"})
})

exports.DeleteTodo=asyncHandler(async (req, res)=>{

    res.json({message:"TODO DELETE SUCCESS"})
})