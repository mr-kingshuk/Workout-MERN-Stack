import { useState } from "react";
import { useWorkoutContext } from "../Hooks/useWorkoutContext";
import { ACTIONS } from "../Context/Actions";

const WorkoutForm = () => {
    const { dispatch } =  useWorkoutContext();

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newWorkout = { title, load, reps };

        const response = await fetch('http://localhost:4000/api/workouts', {
            method: 'POST',
            body: JSON.stringify(newWorkout),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        //this returns the created Item
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        else {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            setEmptyFields([]);
            console.log("new workout added");
            //the action.type is to create a single workout, with the payload which is the array of documents or Javascript Objects created
            dispatch({type: ACTIONS.CREATE_WORKOUT, payload: json})
        }
    }


    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Excercise</h3>

            <label>Excercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className = {emptyFields.includes('title') ? 'error': ''}
            />

            <label>Load(in kgs):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className = {emptyFields.includes('load') ? 'error': ''}
            />

            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className = {emptyFields.includes('reps') ? 'error': ''}
            />

            <button>Submit</button>
            {error && <div className = "error">{error}</div>
            }
        </form>
    );
};

export default WorkoutForm;