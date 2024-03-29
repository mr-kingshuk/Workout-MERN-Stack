import React, { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const useLogin = (email, password) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        //updating state varaiables
        setIsLoading(true);
        setError(null);

        const response = await fetch("http://localhost:4000/api/user/login", {
            method : 'POST',
            headers : {
                'Content-Type' :'application/json'
            },
            body : JSON.stringify({
                email, 
                password
            })
        });
        const json = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        else{
            //save the user to localStorage
            localStorage.setItem('user', JSON.stringify(json));

            //update the AuthContext
            dispatch({type : "login", payload : json });

            setIsLoading(false);
        }
    };

  return { login, isLoading, error};
};

export default useLogin;