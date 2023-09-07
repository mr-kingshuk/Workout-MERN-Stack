import { workoutModel as Workout}  from "../../models/workoutModel.js";
import mongoose from "mongoose";

//get all workouts
export const getWorkouts = async(req, res) =>{
    const _id = req.user;
    const workouts = await Workout.find({user_id : _id}).sort({ createdAt: -1});

    res.status(200).json(workouts);
};