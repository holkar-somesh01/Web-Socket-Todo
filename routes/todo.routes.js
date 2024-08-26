const router=require("express").Router()
const todoController=require("./../controller/todo.controller")

router
.get("/fetch",todoController.GetTodo)
.post("/add",todoController.CreateTodo)
.put("/update/:id",todoController.UpdateTodo)
.delete("/delete/:id",todoController.DeleteTodo)

module.exports=router