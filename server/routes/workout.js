import express from "express";

import { getWorkout } from "../controllers/WorkoutController/getWorkout.js";
import { getWorkouts } from "../controllers/WorkoutController/getWorkouts.js";
import { createWorkout } from "../controllers/WorkoutController/createWorkout.js";
import { deleteWorkout } from "../controllers/WorkoutController/deleteWorkout.js";
import { updateWorkout } from "../controllers/WorkoutController/updateWorkout.js";

import requireAuth from "../middlewares/requireAuth.js";

const router = express.Router();

router.use(requireAuth);

//GET all the workout document
router.get('/', getWorkouts);

//GET a single workout
router.get('/:id', getWorkout);

//POST a new workout
router.post('/', createWorkout);

//DELETE a workout
router.delete('/:id', deleteWorkout);

//Update a workout
router.patch('/:id', updateWorkout);

export default router;