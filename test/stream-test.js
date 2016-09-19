let React = require('react');
let TestUtils = require('react-addons-test-utils');
let should = require('chai').should();

let IssViewer = require('../src/components/stream.js');

describe('IssViewer component', function() {
    it('Should Render Iss Video Stream', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<IssViewer />);
        let result = renderer.getRenderOutput();
        result.props.className.should.equal('issViewer');

        let h3 = result.props.children[0].props.children;
        h3.should.equal('Live Feed From The ISS!');

        let stream = result.props.children[1].props;
        stream.className.should.equal('videoStream');
    });
});
