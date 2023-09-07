import React, {useState} from 'react';
import useSignup from '../Hooks/useSignup';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signup, error, isLoading} = useSignup();

    const handleSubmit = async(e) => {
        e.preventDefault();

        await signup(email, password);
    };

    return (
        <form 
            className='signup'
            onSubmit = {handleSubmit} >

                <h3>SignUp</h3>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value = {email}
                    id= "email" />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value = {password}
                    id= "password" />    
                <button disabled = {isLoading}>Sign Up</button>
                {error && <div className='error'>{error}</div>}
        </form>
    )
};

export default SignUp;