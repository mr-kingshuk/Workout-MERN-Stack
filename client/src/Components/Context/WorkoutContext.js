import { createContext, useReducer } from "react";
import { ACTIONS } from './Actions.js';

//creating a workout context that will hold the state(or reducer) and the update Function to the reducer
//we will then be importing this context and use it wherever we want the state
export const WorkoutContext = createContext();

//this can be used to do dynamic search, by taking the entire data from the server at once, but need to see for paginated resposne
export const workoutsReducer = (state, action) => {
    switch(action.type){
        case ACTIONS.SET_WORKOUTS:
            return{
                workouts: action.payload
            }
        case ACTIONS.CREATE_WORKOUT:   
            return{
                workouts: [action.payload, ...state.workouts]
            }
            case ACTIONS.DELETE_WORKOUT: 
                return{
                    workouts: state.workouts.filter((w) => w._id !== action.payload._id)
                }
        default:
            return state;    
    }
};

//creating a wrapper component to wrap the entire components on which the state( or reducer in this case ) and the function will be accesible
// the reducer an function is present as value of the value parameter
//this will be present in the index.js Component or the App.js component depending on the functionality.
export const WorkoutContextProvider = ({ children }) =>{

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    });

    return(
        <WorkoutContext.Provider value = {{...state, dispatch}}>
            {children}
        </ WorkoutContext.Provider>
    );
};