import express  from "express";

const router = express.Router();

//GET all the workout document
router.get('/', (req, res) =>{
    res.json({msg: "GET all workouts"});
});

//GET a single workout
router.get('/:id', (req, res) =>{
    const {id} = req.params;
    res.json({msg: `GET the workout with ID ${id}`});
});

//POST a new workout
router.post('/', (req, res) =>{
    res.json({msg: "POST a new workout"});
});

//DELETE a workout
router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    res.json({msg: `DELETE the workout with id ${id}`});
});

//Update a workout
router.patch('/:id', (req, res) =>{
    const {id} = req.params;
    res.json({msg: `UPDATE the workout with id ${id}`});
});

export default router;