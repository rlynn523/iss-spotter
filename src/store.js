let redux = require('redux');
let createStore = redux.createStore;
let applyMiddleware = redux.applyMiddleware;
let thunk = require('redux-thunk').default;

let reducers = require('./reducers/location-reducer.js');

let store = createStore(reducers.LocationReducer, applyMiddleware(thunk));
module.exports = store;
