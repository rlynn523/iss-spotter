let React = require('react');
let TestUtils = require('react-addons-test-utils');
let should = require('chai').should();

let CurrentStats = require('../src/components/stats.js');

describe('CurrentStats component', function() {
    it('Should Render Current Velocity and Visibility', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<CurrentStats />);
        let result = renderer.getRenderOutput();
        result.props.className.should.equal('stats');

        let h3 = result.props.children[0].props.children;
        h3.should.equal('Current Stats');

        let velocity = result.props.children[1].props;
        velocity.className.should.equal('velocity');

        let visibility = result.props.children[2].props;
        visibility.className.should.equal('visibility');

        let button = result.props.children[3].props;
        button.className.should.equal('statButton');
    });
});
