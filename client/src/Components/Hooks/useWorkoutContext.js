import { WorkoutContext } from "../Context/WorkoutContext";
import { useContext } from "react";

//Custom Hook to get the workoutContext
export const useWorkoutContext = () =>{
    const context = useContext(WorkoutContext);

    if(!context){
        throw Error('useWorkoutContext must be used inside an WorkoutContextProvider');
    }

    return context;
};