let redux = require('redux');
let createStore = redux.createStore;
let applyMiddleware = redux.applyMiddleware;
let thunk = require('redux-thunk').default;
let reducers = require ('./reducers/index');

let store = createStore(reducers.default, applyMiddleware(thunk));

module.exports = store;
