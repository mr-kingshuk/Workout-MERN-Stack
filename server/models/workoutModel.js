import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id : {
        type: mongoose.SchemaTypes.ObjectId,
        immutable : true
    }
}, { timestamps: true});

export const workoutModel = mongoose.model('Workout', workoutSchema);
