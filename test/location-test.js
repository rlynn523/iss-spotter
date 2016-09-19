let React = require('react');
let TestUtils = require('react-addons-test-utils');
let should = require('chai').should();

let CurrentLocation = require('../src/components/location.js');

describe('CurrentLocation component', function() {
    it('Should Render Coordinates and Map', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<CurrentLocation />);
        let result = renderer.getRenderOutput();
        result.props.className.should.equal('location');

        let h3 = result.props.children[0].props.children;
        h3.should.equal('Current Coordinates');

        let latitude = result.props.children[1].props;
        latitude.className.should.equal('latitude');

        let longitude = result.props.children[2].props;
        longitude.className.should.equal('longitude');

        let button = result.props.children[3].props;
        button.className.should.equal('coordinateButton');

        let map = result.props.children[4].props;
        map.className.should.equal('map');
    });
});
