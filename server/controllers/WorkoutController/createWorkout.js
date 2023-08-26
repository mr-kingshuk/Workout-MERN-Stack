import { workoutModel as Workout}  from "../../models/workoutModel.js";
import mongoose from "mongoose";


//always return the res.json to avoid multiple requests from firing
//create a new workout
export const createWorkout = async(req, res) =>{
    const {title, load, reps} = req.body;

    //array to handle errors
    let emptyFields = [];

    //filling the emptyFields array withe the value it is empty of.
    if(!title)
        emptyFields.push('title');
    if(!load)
        emptyFields.push('load');
    if(!reps)
        emptyFields.push('reps');  
      
    //Error Handling and sending the response to user.    
    if(emptyFields.length)
        return res.status(400).json({ error : 'Please fill in all the fields', emptyFields })    

    //add doc to db
    try{
        const workout = await Workout.create({title, load, reps});
        return res.status(200).json(workout);
    } 
    catch(err){
        return res.status(400).json({error: err.message })
    }
};