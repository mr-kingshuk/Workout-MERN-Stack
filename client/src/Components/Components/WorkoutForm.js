import { useState } from "react";
import { useWorkoutContext } from "../Hooks/useWorkoutContext";

const WorkoutForm = () => {
    const { dispatch } =  useWorkoutContext();

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState('');

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

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        else {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log("new workout added");
            dispatch({type: 'CREATE_WORKOUT', payload: json})
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
            />

            <label>Load(in kgs):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />

            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button>Submit</button>
            {error && <div className = "error">{error}</div>
            }
        </form>
    );
};

export default WorkoutForm;