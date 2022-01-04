import axios from 'axios';
import React, { useState } from 'react';
import { FormContainer } from './style';

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
        <FormContainer>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className='form-control'
                    type="text"
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                /><br />
                <input
                    className='form-control'
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                /><br />
                <input className="btn btn-primary" type="submit" value='Login' />
            </form>
        </FormContainer>
    )
}

export default Login;