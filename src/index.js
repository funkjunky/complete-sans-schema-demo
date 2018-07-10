import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadNormalized } from './reducer';
import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
