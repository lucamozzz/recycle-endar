import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';
import Register from './Register';
import Login from './Login';
import ReactDOM from 'react-dom';

export const Main = () => {
    const [user, setUser] = useState();
    const [component, setComponent] = useState();

    useEffect(() => {
        if (user != undefined) {
            setComponent(
                <div>
                    <Calendar loggedUser={user} />
                </div>
            )
        } else {
            setComponent(
                <div>
                    <Login setUser={setUser} />
                    <Register setUser={setUser} />
                </div>
            )
        }
    }, [user]);

    return (
        <div>
            {
                component
            }
        </div>
    )
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
