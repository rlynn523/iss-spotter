let React = require('react');
let TestUtils = require('react-addons-test-utils');
let should = require('chai').should();

let IssMain = require('../src/components/iss-main.js');

describe('IssMain component', function() {
    it('Should Render Location and Stats Components', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<IssMain />);
        let result = renderer.getRenderOutput();

        let iss = result.props.children.props;
        iss.className.should.equal('iss');

        let h1 = result.props.children.props.children[0].props.children;
        h1.should.equal('ISS Spotter!');

        let CurrentLocation = result.props.children.props.children[1].props;
        CurrentLocation.should.deep.equal({});
    });
});
