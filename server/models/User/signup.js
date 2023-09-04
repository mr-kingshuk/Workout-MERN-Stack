import bcrypt from "bcrypt";
import validator from "validator";

async function signup(email, password){
    //throw an error, which we will catch using the try catch block and display the error.message feild.
    //the try and catch block can also throw error, if mongoose sends an error if it doesn't match the schema.

    //email and password validation
    if(!email || !password)
        throw Error("All fields must be filled");

    if(!validator.isEmail(email))
        throw Error("Email is not valid");

    //Strong password must conatain capital, small, and special character and number    
    if(!validator.isStrongPassword(password))
        throw Error("Password is not strong enough")

    const exists = await this.findOne({ email });
    if(exists)
        throw Error('Email already in use')

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //creating user in collection
    const user = await this.create({ email, password: hash});

    return user;
}

export default signup;