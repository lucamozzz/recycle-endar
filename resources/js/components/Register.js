import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { FormContainer } from './style';

export const Register = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
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
            const data = await axios.post('/api/register',
                {
                    name: username,
                    email: email,
                    password: password,
                    password_confirmation: confirmation
                }).catch(function (error) {
                    if (error.response) {
                        setErr(true);
                    }
                });
            if (!err) {
                const user = get(data.data, 'user', { user: 'none' });
                const token = get(data.data, 'token', { token: 'none' });
                setUser({ token, user });
                try {
                    await axios.post(`/api/calendars`,
                        {
                            name: 'Calendar 1',
                            description: 'default',
                            user_id: user.id,
                        },
                        {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                } catch (error) {
                    console.error(error);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <FormContainer>
            <h3>Register</h3>
            <form onSubmit={e => { handleSubmit(e) }}>
                <input className="form-control" placeholder='Username' type="text" name='username' value={username} onChange={e => setUsername(e.target.value)} required /><br />
                <input style={formStyle} className="form-control" placeholder='Email' type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} required /><br />
                <input className="form-control" placeholder='Password' type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} required /><br />
                <input className="form-control" placeholder='Password confirmation' type="password" name='password_confirmation' value={confirmation} onChange={e => setConfirmation(e.target.value)} required /><br />
                <input className="btn btn-primary" type="submit" value='Register' />
            </form>
        </FormContainer>
    )
}

export default Register;