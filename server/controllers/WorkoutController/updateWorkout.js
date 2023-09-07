import { workoutModel as Workout}  from "../../models/workoutModel.js";
import mongoose from "mongoose";

//update the workout
export const updateWorkout = async(req, res) =>{
    const {id} = req.params;
    const user_id = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findOneAndUpdate({_id : id, user_id : user_id}, {
        ...req.body
    });
    if(!workout){
        return res.status(400).json({error: "No such workout"});
    }
    return res.status(200).json(workout);
}