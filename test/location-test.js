import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import { Provider } from 'react-redux';
import store from '../src/store';
import { CurrentLocation } from '../src/components/location.js'

describe('CurrentLocation component', function() {
    it('Should Render Coordinates and Map', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<CurrentLocation />);
        let result = renderer.getRenderOutput();
        result.props.className.should.equal('locationStyle');
        let location = result.props.children;
        location.props.className.should.equal('location');
        let paperMap = location.props.children[0];
        paperMap.props.className.should.equal('paperMap');

        let map = paperMap.props.children;
        map.props.className.should.equal('map');
        map.props.loadingMessage.should.equal('Loading Map...');

        let coordinatesPaper = location.props.children[1];
        coordinatesPaper.props.className.should.equal('coordinatesPaper');

        let info = coordinatesPaper.props.children;
        info.props.className.should.equal('info');
        info.props.children[0].type.should.equal('h1');
        info.props.children[0].props.children.should.equal('Current Coordinates');

        let infoCounter = info.props.children[1].props;
        infoCounter.className.should.equal('infoCounter');
        infoCounter.children[0].should.equal('Seconds Until Refresh: ');

        let latitude = info.props.children[2].props;
        latitude.className.should.equal('latitude');
        latitude.children[0].should.equal('Latitude: ');

        let longitude = info.props.children[3].props;
        longitude.className.should.equal('longitude');
        longitude.children[0].should.equal('Longitude: ');

        let button = info.props.children[4].props;
        button.to.should.equal('/stream');
        button.children.props.className.should.equal('streamButton');
    });
});
