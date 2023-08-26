import { workoutModel as Workout}  from "../../models/workoutModel.js";
import mongoose from "mongoose";

//get all workouts
export const getWorkouts = async(req, res) =>{
    const workouts = await Workout.find({}).sort({ craetedAt: -1});

    res.status(200).json(workouts);
};