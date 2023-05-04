import { workoutModel as Workout}  from "../models/workoutModel.js";
import mongoose from "mongoose";

//get all workouts
export const getWorkouts = async(req, res) =>{
    const workouts = await Workout.find({}).sort({ craetedAt: -1});

    res.status(200).json(workouts);
};

//get a single workout
export const getWorkout = async(req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"});
    }
    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({error: "No such workout"});
    }
    return res.status(200).json(workout);
};

//create a new workout
export const createWorkout = async(req, res) =>{
    const {title, load, reps} = req.body;

    //add doc to db
    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } 
    catch(err){
        res.status(400).json({error: err.message })
    }
};

//delete a workout
export const deleteWorkout = async(req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findOneAndDelete({_id: id});
    if(!workout){
        return res.status(400).json({error: "No such workout"});
    }
    return res.status(200).json(workout);
};

//update the workout
export const updateWorkout = async(req, res) =>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findOneAndUpdate({_id : id}, {
        ...req.body
    });
    if(!workout){
        return res.status(400).json({error: "No such workout"});
    }
    return res.status(200).json(workout);
}