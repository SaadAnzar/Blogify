const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10
    },
    message: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// We need a collection

const User = mongoose.model("User", userSchema);

module.exports = User;