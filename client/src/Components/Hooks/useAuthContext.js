import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

//Custom Hook to get the workoutContext
export const useAuthContext = () =>{
    const context = useContext(AuthContext);

    if(!context){
        throw Error('useAuthContext must be used inside an AuthContextProvider');
    }

    return context;
};