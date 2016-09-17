let React = require('react');
let ReactDOM = require('react-dom');

let IssMain = require('./components/iss-main.js');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <IssMain />,
        document.getElementById('app')
    );
});
