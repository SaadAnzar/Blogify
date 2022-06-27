const mongoose = require("mongoose");

// Creating a database
mongoose.connect("mongodb://localhost:27017/blogify", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
}).then(() => {
    console.log("Connection Successful");
}).catch((error) => {
    console.log(error);
})