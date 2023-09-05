import React, {useState} from 'react';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email, password);
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
                <button>Sign Up</button>
        </form>
    )
};

export default SignUp;