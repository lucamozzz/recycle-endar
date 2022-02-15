import React, { useState, useEffect } from 'react';
import { AppContainer } from './style';
import Application from './Application';
import Register from './Register';
import Login from './Login';
import ReactDOM from 'react-dom';

export const Main = () => {
    const [user, setUser] = useState();
    const [component, setComponent] = useState();

    useEffect(() => {
        if (user != undefined) {
            setComponent(
                <AppContainer>
                    <Application loggedUser={user} />
                </AppContainer>
            )
        } else {
            setComponent(
                <AppContainer>
                    <Login setUser={setUser} />
                    <Register setUser={setUser} />
                </AppContainer>
            )
        }
    }, [user]);

    return (
        <>
            {component}
        </>
    )
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
