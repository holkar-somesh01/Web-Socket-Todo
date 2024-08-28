const mongoose = require("mongoose")

const todoSchema= new mongoose.Schema({
    task:{ type : String, required:true},
    desc:{ type : String, required:true},
    priority:{ type : String, required:true},
    complete:{ type : Boolean, default:false},


},{timestamps:true})

module.exports= new mongoose.model("todo",todoSchema)