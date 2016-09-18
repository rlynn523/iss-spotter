let React = require('react');
let ReactDOM = require('react-dom');
let Provider = require('react-redux').Provider;
let store = require('./store');
let IssMain = require('./components/iss-main.js');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <IssMain />
        </Provider>,
        document.getElementById('app')
    );
});
