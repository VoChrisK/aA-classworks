import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = {};

    if(window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser  
                }
            },
            session: {
                id: window.currentUser.id
            }
        }
        delete window.currentUser;
    }

    const root = document.getElementById("root");
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store} />, root);
});