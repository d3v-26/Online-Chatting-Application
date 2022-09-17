const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const uri = 'mongodb+srv://user_chat_26:<"DeadSh0t">@cluster0.g6put.mongodb.net/<test>?retryWrites=true&w=majority'

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected"))
.catch(err => console.log(err));

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});