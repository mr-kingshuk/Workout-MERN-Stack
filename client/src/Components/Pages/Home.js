import { useEffect } from 'react';
import { useWorkoutContext } from '../Hooks/useWorkoutContext.js';
import { useAuthContext } from '../Hooks/useAuthContext.js';

//components on this page
import WorkoutDetails from '../Components/WorkoutDetails.js';
import WorkoutForm from '../Components/WorkoutForm.js';

const Home = () =>{
    const { workouts, dispatch } = useWorkoutContext();
    const { user } = useAuthContext();

    useEffect(() =>{
        const fetchWorkouts = async() =>{
            const response = await fetch('http://localhost:4000/api/workouts',{
                headers: {
                    'Authorization' : `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if(response.ok){
                //the action.type is to set all the workouts, with the payload which is the array of documents or Javascript Objects, containing all the workouts documents 
                dispatch({type: 'setWorkouts', payload: json})
            }
        };

        if(user){
            fetchWorkouts();
        }
    }, [dispatch, user]);

    return(
    <div className='home'>
        <div className="workouts">
            {workouts && workouts.map((workout)=>
                <WorkoutDetails workout={workout} key={workout._id} />
            )}
        </div>
        <WorkoutForm />
    </div>);
};

export default Home;