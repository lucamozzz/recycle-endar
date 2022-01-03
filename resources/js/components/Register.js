import axios from 'axios';
import React, { useState } from 'react'

export const Register = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post('/api/register',
                {
                    name: username,
                    email: email,
                    password: password,
                    password_confirmation: confirmation
                });
            const { token, user } = data.data;
            setUser({ token, user });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={e => { handleSubmit(e) }}>
                <label htmlFor="username" required>Username</label>
                <input type="text" name='username' value={username} onChange={e => setUsername(e.target.value)} required /><br />
                <label htmlFor="email">Email</label>
                <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} required /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} required /><br />
                <label htmlFor="password_confirmation">Password confirmation</label>
                <input type="password" name='password_confirmation' value={confirmation} onChange={e => setConfirmation(e.target.value)} required /><br />
                <input type="submit" value='Register' />
            </form>
        </div>
    )
}

export default Register;