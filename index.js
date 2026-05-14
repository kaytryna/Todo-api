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

//open the channel of communication with mongodb
//const local_url = "mongodb://localhost:27017/UserDB"; // for mongo compass
const live_url = 
"mongodb+srv://dev_Katherine:db_Katherine@cluster0.sfe7x8c.mongodb.net/ToDoDB?appName=Cluster0"
mongoose.connect(live_url) 
.then(() => console.log("MongoDB connected")) 
.catch((err) => console.error("Connection Error: ", err)) 

//import router 
const router = require("./Routes/todoroutes");

//create an instance of your router.
// use routes
app.use("/todos", router);

//define the route for testing
app.get("/", (req, res) => {
    res.send("Welcome onboard!");
});

//Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

