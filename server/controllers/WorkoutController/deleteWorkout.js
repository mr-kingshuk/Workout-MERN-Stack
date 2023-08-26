import { workoutModel as Workout}  from "../../models/workoutModel.js";
import mongoose from "mongoose";

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