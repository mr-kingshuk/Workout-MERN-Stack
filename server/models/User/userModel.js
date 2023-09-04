import mongoose from "mongoose";

import signup from "./signup.js";
import login from "./login.js";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    }
});

//applies to the model itself, and not on the instances of it, by using the statics keyword.
//we can't use arrow function, as we are using this keyword in the block.

//static signup method
userSchema.statics.signup = signup;

//static login method
userSchema.statics.login = login;

export const userModel = mongoose.model('user', userSchema);