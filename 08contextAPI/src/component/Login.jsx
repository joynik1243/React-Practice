import React, {useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);


    const handleSubmit = (e)=>{
        setUser({username, password});
    }
    return (
        <div>
            <h2>Login</h2>
            <input 
            onChange={(e)=>{setUsername(e.target.value)}}
            placeholder='Username'
            value={username}
            type="text" />

            <input
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder='Password'
            value={password}
            type="password" />

            <button 
            onClick={handleSubmit}
            type="submit">Submit</button>
        </div>
    )
}

export default Login
