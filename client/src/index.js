import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';
import mainReducer from './redux/reducers/reducers';

import App from './main/App';

let store = createStore(mainReducer, applyMiddleware(thunk));

store.subscribe(()=> {
    console.log(store.getState())
});

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider> ,document.getElementById('root'));