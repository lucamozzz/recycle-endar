import axios from 'axios';
import React, { useState } from 'react'

export const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post('/api/login',
                {
                    email: email,
                    password: password,
                });
            const { token, user } = data.data;
            setUser({ token, user });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={e => { handleSubmit(e) }}>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} required /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} required /><br />
                <input type="submit" value='Login' />
            </form>
        </div>
    )
}

export default Login;