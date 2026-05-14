// import todomodel from model
const TodoModel = require("../Model/todomodel");

// CRUD operation

// C as in create new todo
const newTodo = async (req, res) => {
    try {
        const {title, details} = req.body;
        const todo = await  TodoModel.create({title, details});
        return res
        .status(201)
        .json ({message: "Todo created", data: todo});
    }catch(error) {
        return res
        .status(500)
        .json({message : "Error creating todo list", error: error.message});
    }
};

// R as in read; Get todo
const getAllTodos = async (req, res) => {
    try{
        const Alltodo = await TodoModel.find();
        return res
        .status(200)
        .json({message: "Here is the list of things to do:", data: Alltodo});
    }catch(error) {
        return res
        .status(500)
        .json({message: "Unable to retrieve todo list", error: error.message});
    };
};

const getOneTodo = async (req, res) => {
   try{
    const One_todo = await TodoModel.findById(req.params.id);
    return res
    .status(200)
    .json({message: "Todo found", data: One_todo});
   }catch(error) {
    return res
    .status(500)
    .json({message: "Todo not found!", error: error.message});
   };
};

// U as in update with PUT or PATCH
// here, to update is to click a button. 

const updateTodo = async (req, res) => {
    try {
        //const {completed} = req.body; // that is, todo is updated on whether the action has been completed or not.
        const update = await TodoModel.findByIdAndUpdate(req.params.id,{completed: true}, {new: true});
        return res
        .status(200)
        .json({message: "Todo successfully updated!", data: update});
    }catch (error) {
        return res
        .status(500)
        .json({message: "Unable to update Todo list", error:error.messsage});
    };
};

// D as in delete:

const deleteTodo = async (req, res) => {
    try {
        const delete_todo = await TodoModel.findByIdAndDelete(req.params.id);
        return res
        .status(200)
        .json({message: "Todo successfully deleted!", data: delete_todo})
    }catch(error) {
        return res
        .status(500)
        .json({message: "Todo not deleted", error: error.message});
    };
};

//export CRUD modules
module.exports = {newTodo, getOneTodo, getAllTodos, updateTodo, deleteTodo}




