// import express
const express = require("express");

//import controller
const {newTodo, getOneTodo, getAllTodos, updateTodo, deleteTodo} = require("../Controller/todocontroller");

//define your router with express
const router = express.Router();


//Use post, patch, put, delete to define router for each crud operation.
router.post("/newtodo", newTodo);
router.get("/getAll-todos", getAllTodos);
router.get("/getOne-todo/:id", getOneTodo); // don't forget the /:id
router.patch("/update-todo/:id", updateTodo);
router.delete("/delete-todo/:id", deleteTodo);

module.exports = router;