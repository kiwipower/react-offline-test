import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer, { initialState } from './store/reducer';
import App from './components/app/App.tsx';

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
