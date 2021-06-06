const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value))
            {
                throw new error("Invalid email");
                }
        }
    },
    phone: {
        type: Number,
        required: true,
        min:10

    },
    message: {
        type: String,
        required: true,
        minLength: 2

    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;