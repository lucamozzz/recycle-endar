import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { FormContainer } from './style';

export const Login = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formStyle, setFormStyle] = useState({ borderColor: 'none' });
    const [err, setErr] = useState(false);
    useEffect(() => {
        if (err) {
            setFormStyle({
                borderColor: 'red',
            })
        } else {
            setFormStyle({
                borderColor: 'none',
            })
        }
    }, [err]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post('/api/login',
                {
                    email: email,
                    password: password,
                }).catch(function (error) {
                    if (error.response) {
                        setErr(true);
                    }
                });
            if (!err) {
                const user = get(data.data, 'user', { user: 'none' });
                const token = get(data.data, 'token', { token: 'none' });
                setUser({ token, user });
            }
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
                    style={formStyle}
                    required
                /><br />
                <input
                    className='form-control'
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={formStyle}
                    required
                /><br />
                <input className="btn btn-primary" type="submit" value='Login' />
            </form>
        </FormContainer>
    )
}

export default Login;