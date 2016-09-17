let React = require('react');
let TestUtils = require('react-addons-test-utils');
let should = require('chai').should();

let IssMain = require('../components/iss-main.js');

describe('IssMain component', function() {
    it('Displays Hello World', function(){
        var renderer = TestUtils.createRenderer();
        renderer.render(<IssMain />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('hello-world');
        result.props.children.props.children.should.equal('Hello World');
    });
});
