import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const ACTIONS = {
    'LOGIN': 'login',
    'SIGNUP': 'signup',
    'LOGOUT': 'logout'
}

const authReducer = (state, action) => {
    switch(action.type){
        case ACTIONS.LOGIN:
        case ACTIONS.SIGNUP:
            return { user : action.payload };
        case ACTIONS.LOGOUT:         
            return { user : null }
        default: return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });

    console.log(`AuthContext state : ${state}`);

    return(
        <AuthContext.Provider value = {{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}