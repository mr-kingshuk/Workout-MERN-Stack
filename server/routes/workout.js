import express  from "express";
import { getWorkout, getWorkouts, createWorkout, deleteWorkout, updateWorkout } from "../controllers/workoutController.js";

const router = express.Router();

//GET all the workout document
router.get('/', getWorkouts);

//GET a single workout
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout);

//DELETE a workout
router.delete('/:id', deleteWorkout);

//Update a workout
router.patch('/:id',updateWorkout);

export default router;