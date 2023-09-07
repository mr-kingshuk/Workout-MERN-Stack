import { useWorkoutContext } from "../Hooks/useWorkoutContext";
import { useAuthContext } from "../Hooks/useAuthContext";
import foramatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) => {
  //getting only the dispatch function from the global state holding contextHook
  const { dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  const handleDelete = async () => {
    if (!user)
      return;

    const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    //this returns the deleted item.
    const json = await response.json();

    if (response.ok) {
      //the action.type is to delete the workout, with the payload which is the array of document or Javascript Object, which is the deleted document.
      dispatch({ type: 'deleteWorkout', payload: json })
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{foramatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span onClick={handleDelete}><i className="material-icons">delete</i></ span>
    </div>
  )
}

export default WorkoutDetails;  