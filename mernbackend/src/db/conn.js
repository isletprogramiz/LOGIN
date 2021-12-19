var mongoose = require("mongoose")
var mongodb = require("mongodb")

//database connection
const uri = "mongodb+srv://shilpi:shilpi@cluster0.ywbji.mongodb.net/user_data?retryWrites=true&w=majority"
mongoose.connect(uri)
    .then(() => {
        console.log("database connected")
    })
    .catch((error) => {
        "error found"
    })