import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import App from './App.jsx';
import store from './store';
import './index.css';

// Extracted constant for root element
const ROOT_ELEMENT = document.getElementById('root');

// Introduced a function to encapsulate rendering logic
function renderApp() {
    ReactDOM.createRoot(ROOT_ELEMENT).render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );
}

// Call the render function
renderApp();