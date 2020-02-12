import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import rootReducer from './components/reducers';

import {createStore} from 'redux';

import App from './components/app';


// import {applyMiddleware, createStore} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from './middleware/thunk';
// import 'bootstrap/dist/css/bootstrap.min.css';

//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
///// react.DOM.render(functionality or component, where to append)
