// import mongoose
const mongoose = require("mongoose");

// create schema

const TodoSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    details : {
        type : String,
    },
    time: {
        type: Date,
        default : Date.now // gives actual time todo was created.
    },
    completed : {
        type : Boolean,
        default : false
    }
}, {timestamps: true}); //tells the time when a particular object was created.

const TodoModel = mongoose.model("Todo", TodoSchema);
module.exports = TodoModel;

// you can do this instead of const Todo...., module.exports
// module.exports = mongoose.model("Todo", todoSchema)