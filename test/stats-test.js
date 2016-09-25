import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import { Provider } from 'react-redux';
import store from '../src/store';
import { CurrentStats } from '../src/components/stats'

describe('CurrentStats component', function() {
    it('Should Render Current Velocity and Visibility', function(){
        let renderer = TestUtils.createRenderer();
        renderer.render(<CurrentStats />);
        let result = renderer.getRenderOutput();
        result.props.children.props.className.should.equal('statsPaper');

        let statsInfo = result.props.children.props.children.props;
        statsInfo.className.should.equal('statsInfo');
        statsInfo.children[0].type.should.equal('h1');
        statsInfo.children[0].props.children.should.equal('Current Stats');

        let infoCounter = statsInfo.children[1].props;
        infoCounter.className.should.equal('infoCounter');
        infoCounter.children[0].should.equal('Seconds Until Refresh: ');

        let velocity = statsInfo.children[2].props;
        velocity.className.should.equal('velocity');
        velocity.children[0].should.equal('Velocity:   ');
        velocity.children[2].should.equal(' mph');

        let visibility = statsInfo.children[3].props;
        visibility.className.should.equal('visibility');
        visibility.children[0].should.equal('Visibility:  ');

        let button = statsInfo.children[4].props;
        button.to.should.equal('/map/');
        button.children.props.className.should.equal('mapsButton');
    });
});
