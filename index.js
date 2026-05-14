// install dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

//create an instance of express
const app = express();
const port = 7077;

//call in your middlewares(cors and express.json)
app.use(cors());
app.use(express.json());

//define the route for testing
app.get("/", (req, res) => {
    res.send("Welcome onboard!");
});

//Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//open the channel of communication with mongodb
const local_url = "mongodb://localhost:27017/UserDB"; // for mongo compass
mongoose.connect(local_url) 
.then(() => console.log("MongoDB connected")) 
.catch((err) => console.error("Connection Error: ", err)) 

//import router 
const router = require("./Routes/todoroutes");

//create an instance of your router.
// use routes
app.use("/todos", router);