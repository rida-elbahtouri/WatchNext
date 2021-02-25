import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./index.css";
import { Provider } from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers';


const store=createStore(Reducers,applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
